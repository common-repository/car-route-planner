<?php
class CarRoutePlanner {

   const WIDGET_SERVER_URL_OPTION_NAME = 'crp-server-url';
   const DEFAULT_SERVER_URL = 'https://www.drivebestway.com';
   const TRANSIENT_CONFIG_SLUG = 'crp-transient-config';
   const TRANSIENT_CONFIG_SECONDS = 86400;
   const CONFIG_GET_TIMEOUT = 10;
   const SHORTCODE = "crp";
   const AUTOCOMPLETE_PATH = "/rp/distance-ajax/atc.json?query=TERM";
   const CSS_PATH = '/widget/v1/widget.css';
   const CLIENT_SCRIPT_PATH = '/widget/v1/client.js';
   const CONFIG_PATH = '/widget/v1/cms/config';

   public static function getShortcodeOptions() {
      return array(
         'language',
         'currency',
         'measure',
         'text_color',
         'background_color',
         'accent_color',
         'default_from',
         'hide_from',
         'default_to',
         'hide_to',
         'show_via',
         'default_via',
         'show_fuel_calc',
         'default_fuel_consumption',
         'default_fuel_price',
         'show_speed_profile',
         'default_speed_limit_motorway',
         'default_speed_limit_other',
         'show_result_length',
         'show_result_driving_time',
         'show_result_fuel_amount',
         'show_result_fuel_cost',
         'show_result_customized_cost',
         'customized_cost_formula',
         'customized_cost_label',
         'show_result_map',
         'show_result_scheme',
         'calculate_instantly',
         'only_countries',
         'prefer_countries',
         'disable_font_auto_tuning',
         'font_size',
         'font_family',
      );
   }

   public static function getPluginOptions() {
      $optionsArray = array();
      foreach (self::getShortcodeOptions() as $shortcodeString) {
         $optionsArray[] = 'crp_' . $shortcodeString;
      }
      $optionsArray[] = 'crp_shortcode_type';
      return $optionsArray;
   }

   public static function init() {
      load_plugin_textdomain('car-route-planner', false, dirname( plugin_basename(__FILE__) ) . '/languages/');
      self::addShortcode();
   }

   public static function pluginDeactivation() {
      foreach (self::getPluginOptions() as $optionString) {
         delete_option($optionString);
      }
      delete_transient(self::TRANSIENT_CONFIG_SLUG);
      remove_shortcode(self::SHORTCODE);
   }

   public static function getConfig() {
      $configArray = get_transient(self::TRANSIENT_CONFIG_SLUG);
      return $configArray === false ? self::refetchConfig() : $configArray;
   }

   public static function refetchConfig() {
       $configArray = self::retrieveConfig();
       if ($configArray) {
           set_transient(self::TRANSIENT_CONFIG_SLUG, $configArray, self::TRANSIENT_CONFIG_SECONDS);


           $jsonConfigArray = [];
           $jsonConfigArray["i18nSettings"] = $configArray["i18nSettings"];
           $jsonConfigArray["fonts"] = $configArray["fonts"];

           $languagesArray = [];
           foreach ($configArray["i18nSettings"] as $domainSection) {
               $languagesArray[$domainSection["language"]] = $domainSection["language"];
           }
           $jsonConfigArray["languages"] = array_keys($languagesArray);
           $jsonConfigArray["currencies"] = $configArray["currencies"];

           $countriesArray = [];
           list($languageCode, $areaCode) = explode("-", get_bloginfo("language"));
           foreach ($configArray["countries"] as $isoCode => $namesArray) {
               $countriesArray[] = [
                   "iso" => $isoCode,
                   "name" => isset($namesArray[$languageCode]) ? $namesArray[$languageCode] : $namesArray['en'],
               ];
           }
           $jsonConfigArray["countries"] = $countriesArray;


           $jsonPathString = plugin_dir_path(__FILE__) . "block/build/config.json";
           if ((! file_exists($jsonPathString)) or is_writable($jsonPathString)) {
               file_put_contents($jsonPathString, wp_json_encode($jsonConfigArray, JSON_PRETTY_PRINT));
               file_put_contents(plugin_dir_path(__FILE__) . "block/src/config.json", wp_json_encode($jsonConfigArray, JSON_PRETTY_PRINT));
           }

       }
       return $configArray;
   }

   private static function retrieveConfig() {
      $request = wp_remote_get(
         self::DEFAULT_SERVER_URL . self::CONFIG_PATH . "?wp_plugin_version=" . CAR_ROUTE_PLANNER_VERSION, array('timeout' => self::CONFIG_GET_TIMEOUT)
      );
      if(is_wp_error($request)) {
         return array();
      }
      $bodyString = wp_remote_retrieve_body($request);
      return json_decode($bodyString, true);
   }

   public static function setDefaultOptions() {

      $currentWpLocale = get_locale();
      $settingsArray = self::getDomainSettings($currentWpLocale);

      update_option("crp_language", $settingsArray['language'], true);
      update_option("crp_currency", $settingsArray['currency'], true);
      update_option("crp_measure", $settingsArray['measurement'], true);
      update_option("crp_text_color", '#000000', true);
      update_option("crp_background_color", '#ffffff', true);
      update_option("crp_accent_color", '#269adb', true);
      update_option("crp_show_fuel_calc", 'on', true);
      update_option("crp_show_speed_profile", 'on', true);
      update_option("crp_show_result_length", 'on', true);
      update_option("crp_show_result_driving_time", 'on', true);
      update_option("crp_show_result_fuel_amount", 'on', true);
      update_option("crp_show_result_fuel_cost", 'on', true);
      update_option("crp_show_result_map", 'on', true);
      update_option("crp_show_result_scheme", 'on', true);
      update_option("crp_show_result_customized_cost", '', true);
      update_option("crp_shortcode_type", 'simple');
   }

   private static function getDomainSettings($localeString, $currencyString = null) {
      $configArray = self::getConfig();
      $languageString = substr($localeString, 0, 2);
      $domainSettingsArray = null;
      foreach ($configArray['i18nSettings'] as $domainArray) {
         $domainLanguageString = substr($domainArray['hreflang'], 0, 2);
         if (($domainLanguageString == $languageString) and ($domainArray['currency'] == $currencyString)) {
            $domainSettingsArray = $domainArray;
            break;
         }
      }
      if (! $domainSettingsArray) {
         foreach ($configArray['i18nSettings'] as $domainArray) {
            $hreflangLocale = str_replace("-", "_", $domainArray['hreflang']);
            if ($hreflangLocale == $localeString) {
               $domainSettingsArray = $domainArray;
               break;
            }
         }
      }
      if (! $domainSettingsArray) {
         foreach ($configArray['i18nSettings'] as $domainArray) {
            $domainLanguageString = substr($domainArray['hreflang'], 0, 2);
            if ($domainLanguageString == $languageString) {
               $domainSettingsArray = $domainArray;
               break;
            }
         }
      }
      if (! $domainSettingsArray) {
         foreach ($configArray['i18nSettings'] as $domainArray) {
            if (isset($domainArray['default'])) {
               $domainSettingsArray = $domainArray;
               break;
            }
         }
      }

      return $domainSettingsArray;
   }

   public static function getDomainUrl($usePluginOptions = false) {
      $localeString = $currencyString = null;
      if ($usePluginOptions) {
         $localeString = get_option('crp_language', null);
         $currencyString = get_option('crp_currency', null);
      }
      if ($localeString === null) {
         $localeString = get_locale();
      }
      $domainSettingsArray = self::getDomainSettings($localeString, $currencyString);
      return $domainSettingsArray['url'];
   }

   private static function getDomainUrlByLocaleAndCurrency($localeString, $currencyString) {
      $domainSettingsArray = self::getDomainSettings($localeString, $currencyString);
      return $domainSettingsArray['url'];
   }

   private static function getSimpleFormSubmitUrl() {
      $domainSettingsArray = self::getDomainSettings(get_locale());
      return $domainSettingsArray['submitUrl'];
   }

   private static function addShortcode() {
      add_shortcode(self::SHORTCODE, array('CarRoutePlanner', 'shortcodeHandler'));
   }

   public static function shortcodeHandler($attrsArray) {
      if (!$attrsArray) {
         $htmlString = self::getHtmlForSimpleShortcode();
      } else {
         $htmlString = self::getHtmlForAdvancedShortcode($attrsArray);
      }
      return $htmlString;
   }

   private static function getHtmlForSimpleShortcode() {

      $autocompleteUrlString = self::getDomainUrl() . self::AUTOCOMPLETE_PATH;
      $fromLabelString = __("From", 'car-route-planner');
      $toLabelString = __("To", 'car-route-planner');
      $submitString = __("Calculate", 'car-route-planner');
      $actionString = self::getSimpleFormSubmitUrl();
      $utmSourceString = esc_attr(self::getSiteDomain());

      wp_enqueue_script(
         'crp-autocomplete',
         plugin_dir_url(__FILE__) . 'js/autocomplete.js',
         array('jquery','jquery-ui-autocomplete'),
         null,
         true
      );

      wp_enqueue_script(
         'crp-simple',
         plugin_dir_url(__FILE__) . 'js/simple.js',
         array('crp-autocomplete'),
         null,
         true
      );

      $wp_scripts = wp_scripts();
      wp_enqueue_style(
         'car-route-planner-admin-ui-css',
         '//ajax.googleapis.com/ajax/libs/jqueryui/' . $wp_scripts->registered['jquery-ui-core']->ver . '/themes/smoothness/jquery-ui.css'
      );

      wp_enqueue_style(
         'car-route-planner-client-css',
         plugin_dir_url(__FILE__) . 'css/client.css'
      );

      $htmlString = <<<EOL
            <form class="crp-simple-form" action="{$actionString}">
               <div class="crp-table">
                  <div class="crp-tr">
                     <div class="crp-td">
                        <label for="crp-from">{$fromLabelString}</label>
                     </div>
                     <div class="crp-td">
                        <input type="text" name="from" id="crp-from">
                     </div>
                  </div>
                  <div class="crp-tr">
                     <div class="crp-td">
                        <label for="crp-to">{$toLabelString}</label>
                     </div>
                     <div class="crp-td">
                        <input type="text" name="to" id="crp-to">
                     </div>
                  </div>
               </div>
               <input type="hidden" name="utm_source" value="{$utmSourceString}">
               <input type="hidden" name="utm_medium" value="wp_plugin">
               <input type="hidden" name="utm_campaign" value="widget">
               <input type="hidden" name="utm_content" value="simple_form_submit">
               <input type="submit" value="{$submitString}" class="crp-submit">
            </form>
            <script>var crpAutocompleteUrl = "{$autocompleteUrlString}";</script>
EOL;
      return $htmlString;
   }

   private static function getHtmlForAdvancedShortcode($attrsArray) {

      $dataAttrsArray = array();
      $attributesArray = $attrsArray;
      $shortcodeOptionsArray = self::getShortcodeOptions();

      $currentUrlString = $_SERVER['REQUEST_URI'];
      $settingsArray = self::getConfig()["settings"]["default"];
      foreach (self::getConfig()["settings"] as $pattern => $settings) {
          if (($currentUrlString == $pattern) or (preg_match("/".str_replace("/", "\/", $pattern)."/", $currentUrlString))) {
               $settingsArray = $settings;
          }
      }
      $widgetString = $settingsArray["link"];

      if (isset($settingsArray["data"]) and is_array($settingsArray["data"])) {
          foreach ($settingsArray["data"] as $key => $value) {
              if (false !== $value) {
                  $attributesArray[$key] = $value;
              } else {
                  if (isset($attributesArray[$key])) {
                      unset($attributesArray[$key]);
                  }
              }
          }
      }

      $colorAttrsArray = array();
      foreach ($attributesArray as $attrNameString => $attrValue) {
         if (in_array($attrNameString, array('text_color', 'background_color', 'accent_color'), true)) {
            $colorAttrsArray[$attrNameString] = $attrValue;
            continue;
         }
         if (is_numeric($attrNameString) and in_array($attrValue, $shortcodeOptionsArray, true)) {
            $dataAttrsArray[] = 'data-' . str_replace('_', '-', $attrValue);
            continue;
         }
         if (in_array($attrNameString, $shortcodeOptionsArray, true) and strlen($attrValue)) {
            $dataAttrsArray[] = 'data-' . str_replace('_', '-', $attrNameString) . '="' . esc_attr($attrValue) . '"';
         }
      }

      $localeString = get_locale();
      $currencyString = null;
      if (isset($attrsArray['language']) and strlen($attrsArray['language'])) {
         $localeString = $attrsArray['language'];
      }
      if (isset($attrsArray['currency']) and strlen($attrsArray['currency'])) {
         $currencyString = $attrsArray['currency'];
      }
      $domainUrlString = self::getDomainUrlByLocaleAndCurrency($localeString, $currencyString);
      $cssUrlString = self::getCssUrl($colorAttrsArray, $domainUrlString);
      $dataAttrsArray[] = 'data-css="' . esc_attr($cssUrlString) . '"';
      $domainUrlString = esc_attr($domainUrlString);
      $dataString = join(' ', $dataAttrsArray);
      $widgetString = str_replace(["{data}", "{domain}"],[$dataString, $domainUrlString], $widgetString);

      wp_enqueue_script( 'rp-widget-script', $domainUrlString . self::CLIENT_SCRIPT_PATH, [], CAR_ROUTE_PLANNER_VERSION, ['strategy' => 'async'] );
      wp_register_style( 'rp-widget-link-container', false );
      wp_enqueue_style( 'rp-widget-link-container' );
      wp_add_inline_style( 'rp-widget-link-container', isset($settingsArray["style"]) ? $settingsArray["style"] : '' );

      return $widgetString;
   }

   private static function getCssUrl($argsArray, $domainUrlString) {
      $cssUrlString = $domainUrlString . CarRoutePlanner::CSS_PATH;
      $colorParams = array();
      if (isset($argsArray['text_color'])) {
         $colorParams[] = 'tc=' . str_replace('#', '', $argsArray['text_color']);
      }
      if (isset($argsArray['background_color'])) {
         $colorParams[] = 'bc=' . str_replace('#', '', $argsArray['background_color']);
      }
      if (isset($argsArray['accent_color'])) {
         $colorParams[] = 'pc=' . str_replace('#', '', $argsArray['accent_color']);
      }
      $cssUrlString .= '?' . join('&', $colorParams);

      return $cssUrlString;
   }

   private static function getSiteDomain() {
      return parse_url(get_site_url(), PHP_URL_HOST);
   }
}