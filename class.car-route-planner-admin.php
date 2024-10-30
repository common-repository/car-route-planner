<?php

require_once(CRP_PLUGIN_DIR . 'class.car-route-planner.php');

class CarRoutePlannerAdmin {

    public static function init() {
       add_filter('plugin_action_links', array('CarRoutePlannerAdmin', 'pluginActionLinks'), 10, 2);
       self::registerPluginSettings();
       add_action('admin_notices', array('CarRoutePlannerAdmin', 'notAvailableServerNotice'));
    }

    private static function registerPluginSettings() {
       foreach (CarRoutePlanner::getPluginOptions() as $optionString) {
          register_setting('crp-option-group', $optionString);
       }
    }

    public static function pluginActionLinks($linksArray, $fileString) {
        if ($fileString == plugin_basename('car-route-planner/car-route-planner.php')) {
            $linksArray[] = '<a href="' . esc_url( self::getConfigPageUrl() ) . '">'.esc_html__('Settings' , 'car-route-planner').'</a>';
        }
        return $linksArray;
    }

    public static function adminMenu() {
         add_options_page(
            __('Car Route Planner', 'car-route-planner'), // page title
            __('Car Route Planner', 'car-route-planner'), // menu title
            'manage_options', // capability
            'car-route-planner-config-page', // menu_slug
            array('CarRoutePlannerAdmin', 'adminOptionsPage')
         );
    }

    public static function notAvailableServerNotice() {
       global $pagenow;
       if ($pagenow == 'options-general.php' and !CarRoutePlanner::getConfig()) {
          $errorTextString = __('Plugin\'s server is temporarily unavailable. Reload the page in a few minutes.' , 'car-route-planner');
          $noticeHtmlString = <<<EOL
         <div class="error notice">
            <p>{$errorTextString}</p>
         </div>
EOL;
          echo $noticeHtmlString;
       }
    }

    public static function adminOptionsPage() {

       if (! CarRoutePlanner::getConfig()) {
         return "";
       }

       if (false === get_option("crp_language") or get_option('crp_shortcode_type') == 'simple') {
         CarRoutePlanner::setDefaultOptions();
       }

       wp_enqueue_script(
          'crp-clipboard',
          plugin_dir_url(__FILE__) . 'js/clipboard.min.js'
       );

       wp_enqueue_script(
          'crp-autocomplete',
          plugin_dir_url(__FILE__) . 'js/autocomplete.js',
          array('jquery','jquery-ui-autocomplete'),
          null,
          true
       );

       wp_enqueue_script(
          'crp-admin',
          plugin_dir_url(__FILE__) . 'js/admin.js',
          array('jquery','jquery-ui-accordion','crp-autocomplete')
       );

       wp_enqueue_style( 'wp-color-picker');
       wp_enqueue_script( 'wp-color-picker');

       wp_enqueue_style('crp-admin-styles', plugin_dir_url(__FILE__) . 'css/admin.css');

       $wp_scripts = wp_scripts();
       wp_enqueue_style(
          'car-route-planner-admin-ui-css',
         '//ajax.googleapis.com/ajax/libs/jqueryui/' . $wp_scripts->registered['jquery-ui-core']->ver . '/themes/smoothness/jquery-ui.css'
       );

       $languagesArray = self::getLanguages();
       $selectedLanguageString = get_option('crp_language');

       $settingsArray = CarRoutePlanner::getConfig();
       $currenciesArray = $settingsArray['currencies'];
       $selectedCurrencyString = get_option('crp_currency');

       $measuresArray = array(
         'metric' => __('Kilometer, liter', 'car-route-planner'),
         'imperial' => __('Mile, UK gallon', 'car-route-planner'),
         'us_cust' => __('Mile, US gallon', 'car-route-planner')
       );
       $selectedMeasureString = get_option('crp_measure');

       $fontFamiliesArray = $settingsArray['fonts'];
       $fontSizesArray = array(
           "13px", "14px", "15px", "16px", "17px", "18px", "19px", "20px",
           "0.5rem", "0.6rem", "0.7rem", "0.8rem", "0.9rem", "1rem", "1.1rem", "1.2rem", "1.3rem", "1.4rem", "1.5rem",
       );

       $fuelConsumptionUnitString = self::getFuelConsumptionUnit($selectedMeasureString);
       $fuelPriceUnitString = self::getFuelPriceUnit($selectedCurrencyString, $selectedMeasureString);
       $speedUnitString = self::getSpeedUnit($selectedMeasureString);

       $autocompleteUrlString = CarRoutePlanner::getDomainUrl(true) . CarRoutePlanner::AUTOCOMPLETE_PATH;
?>
        <div class="wrap crp-wrap">

           <h3><?php echo __("Generate shortcode", 'car-route-planner'); ?></h3>

            <form method="post" action="options.php" id="crp-options-form">
               <?php
                  settings_fields('crp-option-group');
                  do_settings_sections('crp-option-group');

                  $simpleSelectedString = $advancedSelectedString = '';
                  if (get_option('crp_shortcode_type') == 'advanced') {
                     $advancedSelectedString = ' checked';
                  } else {
                     $simpleSelectedString = ' checked';
                  }
               ?>
               <label class="crp-config-choice-simple"><input type="radio" name="crp_shortcode_type" value="simple" id="crp-simple-config"<?php echo $simpleSelectedString; ?>><?php echo __('Minimalistic mode, results will be displayed on plugin developer\'s website.', 'car-route-planner'); ?></label>
               <label class="crp-config-choice-advanced"><input type="radio" name="crp_shortcode_type" value="advanced" id="crp-advanced-config"<?php echo $advancedSelectedString; ?>><?php echo __('Advanced mode, results will be displayed inside iframe with \'powered by\' hyperlink.', 'car-route-planner'); ?></label>
               <div class="crp-advanced-settings-wrap">
                  <div id="crp-settings-accordion" class="crp-settings-accordion">
                  <h3><?php echo __("General settings", 'car-route-planner'); ?></h3>
                  <div>
                     <label><?php echo __("Language", 'car-route-planner'); ?>
                        <select id="crp_language" name="crp_language">
                           <?php foreach ($languagesArray as $languageString) { ?>
                              <?php $selectedAttr = ($languageString == $selectedLanguageString) ? " selected" : ""; ?>
                              <option value="<?php echo esc_attr($languageString); ?>"<?php echo $selectedAttr; ?>><?php echo $languageString; ?></option>
                           <?php } ?>
                        </select>
                     </label>
                     <label><?php echo __("Currency", 'car-route-planner'); ?>
                        <select id="crp_currency" name="crp_currency">
                           <?php foreach ($currenciesArray as $currencyString) { ?>
                              <?php $selectedAttr = ($currencyString == $selectedCurrencyString) ? " selected" : ""; ?>
                              <option value="<?php echo esc_attr($currencyString); ?>"<?php echo $selectedAttr; ?>><?php echo $currencyString; ?></option>
                           <?php } ?>
                        </select>
                     </label>
                     <label><?php echo __("Units", 'car-route-planner'); ?>
                        <select id="crp_measure" name="crp_measure">
                           <?php foreach ($measuresArray as $measureCodeString => $measureDescriptionString) { ?>
                              <?php $selectedAttr = ($measureCodeString == $selectedMeasureString) ? " selected" : ""; ?>
                              <option value="<?php echo esc_attr($measureCodeString); ?>"<?php echo $selectedAttr; ?>><?php echo __($measureDescriptionString, 'car-route-planner'); ?></option>
                           <?php } ?>
                        </select>
                     </label>
                  </div>

                  <h3><?php echo __("Design", 'car-route-planner'); ?></h3>
                  <div>

                      <?php $isChecked = (get_option('crp_disable_font_auto_tuning')) ? ' checked':''; ?>
                      <label>
                          <input type="checkbox" id="crp_disable_font_auto_tuning" name="crp_disable_font_auto_tuning"<?php echo $isChecked; ?> onchange="onChangeDisableFontAutoTuning()"><?php echo __('Disable font auto tuning', 'car-route-planner'); ?>
                      </label>

                      <fieldset id="crp-fonts-group">
                          <label><?php echo __("Font family", 'car-route-planner'); ?>
                              <select id="crp_font_family" name="crp_font_family">
                                  <?php foreach ($fontFamiliesArray as $fontFamilyString) { ?>
                                      <?php $selectedAttr = (get_option('crp_font_family') == $fontFamilyString) ? " selected" : ""; ?>
                                      <option value="<?php echo esc_attr($fontFamilyString); ?>"<?php echo $selectedAttr; ?>><?php echo $fontFamilyString; ?></option>
                                  <?php } ?>
                              </select>
                          </label>

                          <label><?php echo __("Font size", 'car-route-planner'); ?>
                              <select id="crp_font_size" name="crp_font_size">
                                  <?php foreach ($fontSizesArray as $fontSizeString) { ?>
                                      <?php $selectedAttr = (get_option('crp_font_size') == $fontSizeString) ? " selected" : ""; ?>
                                      <option value="<?php echo esc_attr($fontSizeString); ?>"<?php echo $selectedAttr; ?>><?php echo $fontSizeString; ?></option>
                                  <?php } ?>
                              </select>
                          </label>
                      </fieldset>
                      <script>
                          function onChangeDisableFontAutoTuning() {
                              var fontFieldset = document.getElementById("crp-fonts-group");
                              var element = document.getElementById("crp_disable_font_auto_tuning");
                              if (element.checked) {
                                  fontFieldset.removeAttribute("disabled");
                              } else {
                                  fontFieldset.setAttribute("disabled", "disabled");
                              }
                          }
                          onChangeDisableFontAutoTuning();
                      </script>


                     <label class="color-label"><?php echo __("Text color", 'car-route-planner');?>
                        <div><input type="text" name="crp_text_color" value="<?php echo esc_attr(get_option('crp_text_color')); ?>" class="color-field"/></div>
                     </label>

                     <label class="color-label"><?php echo __("Background color", 'car-route-planner'); ?>
                        <div><input type="text" name="crp_background_color" value="<?php echo esc_attr(get_option('crp_background_color')); ?>" class="color-field"/></div>
                     </label>

                     <label class="color-label"><?php echo __("Accent color", 'car-route-planner'); ?>
                        <div><input type="text" name="crp_accent_color" value="<?php echo esc_attr(get_option('crp_accent_color')); ?>" class="color-field"/></div>
                     </label>
                  </div>

                  <h3><?php echo __("Form", 'car-route-planner'); ?></h3>
                  <div>
                     <label><?php echo sprintf(__('Default value for "%s"', 'car-route-planner'), __('From', 'car-route-planner')); ?>
                        <input type="text" name="crp_default_from" value="<?php echo esc_attr(get_option('crp_default_from')); ?>" autocomplete="off" />
                     </label>

                     <?php $isChecked = (get_option('crp_hide_from')) ? ' checked':''; ?>
                     <label>
                        <input type="checkbox" name="crp_hide_from"<?php echo $isChecked; ?>><?php echo sprintf(__('hide "%s"', 'car-route-planner'), __('From', 'car-route-planner')); ?>
                        (<?php echo sprintf(__('default value for "%s" must be specified"', 'car-route-planner'), __('From', 'car-route-planner')); ?>)
                     </label>

                     <label><?php echo sprintf(__('Default value for "%s"', 'car-route-planner'), __('To', 'car-route-planner')); ?>
                        <input type="text" name="crp_default_to" value="<?php echo esc_attr(get_option('crp_default_to')); ?>" autocomplete="off" />
                     </label>

                     <?php $isChecked = (get_option('crp_hide_to')) ? ' checked':''; ?>
                     <label>
                        <input type="checkbox" name="crp_hide_to"<?php echo $isChecked; ?>><?php echo sprintf(__('hide "%s"', 'car-route-planner'), __('To', 'car-route-planner')); ?>
                        (<?php echo sprintf(__('default value for "%s" must be specified"', 'car-route-planner'), __('To', 'car-route-planner')); ?>)
                     </label>

                     <?php $isChecked = (get_option('crp_show_via')) ? ' checked':''; ?>
                     <label>
                        <input type="checkbox" name="crp_show_via"<?php echo $isChecked; ?>><?php echo sprintf(__('show "%s"', 'car-route-planner'), __('Intermediate points', 'car-route-planner')); ?>
                     </label>

                     <label><?php echo sprintf(__('Default value for "%s"', 'car-route-planner'), __('Intermediate points', 'car-route-planner')); ?>
                        <input type="text" name="crp_default_via" value="<?php echo esc_attr(get_option('crp_default_via')); ?>" autocomplete="off" />
                     </label>

                     <?php $isChecked = (get_option('crp_show_fuel_calc')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_fuel_calc"<?php echo $isChecked; ?>><?php echo __('show fuel calculator', 'car-route-planner'); ?>
                     </label>

                     <label><?php echo sprintf(__('Default value for "%s"', 'car-route-planner'), __('Fuel consumption', 'car-route-planner')) . ', ' . $fuelConsumptionUnitString; ?>
                        <input type="text" name="crp_default_fuel_consumption" value="<?php echo esc_attr(get_option('crp_default_fuel_consumption')); ?>" />
                     </label>

                     <label><?php echo sprintf(__('Default value for "%s"', 'car-route-planner'), __('Fuel price', 'car-route-planner')) . ', ' . $fuelPriceUnitString; ?>
                        <input type="text" name="crp_default_fuel_price" value="<?php echo esc_attr(get_option('crp_default_fuel_price')); ?>" />
                     </label>

                     <?php $isChecked = (get_option('crp_show_speed_profile')) ? ' checked':''; ?>
                     <label>
                        <input type="checkbox" name="crp_show_speed_profile"<?php echo $isChecked; ?>><?php echo __('show "Maximum speed" fields', 'car-route-planner'); ?>
                     </label>

                     <label><?php echo sprintf(__('Default value for "%s"', 'car-route-planner'), __('Maximum speed on motorway', 'car-route-planner')) . ', ' . $speedUnitString; ?>
                        <input type="text" name="crp_default_speed_limit_motorway" value="<?php echo esc_attr(get_option('crp_default_speed_limit_motorway')); ?>" />
                     </label>

                     <label><?php echo sprintf(__('Default value for "%s"', 'car-route-planner'), __('Maximum speed on other roads', 'car-route-planner')) . ', ' . $speedUnitString; ?>
                        <input type="text" name="crp_default_speed_limit_other" value="<?php echo esc_attr(get_option('crp_default_speed_limit_other')); ?>" />
                     </label>
                  </div>

                  <h3><?php echo __("Results", 'car-route-planner'); ?></h3>
                  <div>
                     <?php $isChecked = (get_option('crp_show_result_length')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_result_length"<?php echo $isChecked; ?>><?php echo sprintf(__('show "%s"', 'car-route-planner'), __('Route length', 'car-route-planner')); ?>
                     </label>

                     <?php $isChecked = (get_option('crp_show_result_driving_time')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_result_driving_time"<?php echo $isChecked; ?>><?php echo sprintf(__('show "%s"', 'car-route-planner'), __('Driving time', 'car-route-planner')); ?>
                     </label>

                     <?php $isChecked = (get_option('crp_show_result_fuel_amount')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_result_fuel_amount"<?php echo $isChecked; ?>><?php echo sprintf(__('show "%s"', 'car-route-planner'), __('Fuel amount', 'car-route-planner')); ?>
                     </label>

                     <?php $isChecked = (get_option('crp_show_result_fuel_cost')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_result_fuel_cost"<?php echo $isChecked; ?>><?php echo sprintf(__('show "%s"', 'car-route-planner'), __('Fuel cost', 'car-route-planner')); ?>
                     </label>

                     <?php $isChecked = (get_option('crp_show_result_customized_cost')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_result_customized_cost"<?php echo $isChecked; ?>><?php echo sprintf(__('show "%s"', 'car-route-planner'), __('Customized cost', 'car-route-planner')); ?>
                     </label>

                     <label><?php echo __('Formula for "Customized cost"', 'car-route-planner')?>, <a href="<?php echo CarRoutePlanner::getDomainUrl() ?>/widget/v1/doc#customized_cost" target="_blank"><?php echo __('how to compose formula', 'car-route-planner') ?></a>
                        <input type="text" name="crp_customized_cost_formula" value="<?php echo esc_attr(get_option('crp_customized_cost_formula')); ?>" />
                     </label>

                     <label><?php echo __('Label for "Customized cost"', 'car-route-planner'); ?>
                        <input type="text" name="crp_customized_cost_label" value="<?php echo esc_attr(get_option('crp_customized_cost_label')); ?>" />
                     </label>

                     <?php $isChecked = (get_option('crp_show_result_map')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_result_map"<?php echo $isChecked; ?>><?php echo __('show map', 'car-route-planner'); ?>
                     </label>

                     <?php $isChecked = (get_option('crp_show_result_scheme')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_show_result_scheme"<?php echo $isChecked; ?>><?php echo __('show route scheme', 'car-route-planner'); ?>
                     </label>

                     <?php $isChecked = (get_option('crp_calculate_instantly')) ? ' checked':''; ?>
                     <label>
                         <input type="checkbox" name="crp_calculate_instantly"<?php echo $isChecked; ?>><?php echo __('calculate route automatically on page load', 'car-route-planner'); ?>
                     </label>

                     <label>
                        <?php echo __('strictly limit results by countries', 'car-route-planner'); ?>
                        <?php 
                        	$crp_only_countries = get_option('crp_only_countries', []); 
                        	if (empty($crp_only_countries)) {
	                        	$crp_only_countries = [];
                        	}
                        ?>
                        <select multiple name="crp_only_countries[]">
                            <?php foreach ($settingsArray['countries'] as $isoCode => $countryI18nArray) { ?>
                                <?php $selectedAttr = in_array($isoCode, $crp_only_countries) ? " selected" : ""; ?>
                                <option value="<?php echo esc_attr($isoCode) ?>"<?php echo $selectedAttr ?>><?php echo $countryI18nArray[$selectedLanguageString] ?></option>
                            <?php } ?>
                        </select>
                     </label>

                     <label>
                        <?php echo __('soft preference for countries', 'car-route-planner'); ?>
                        <?php 
                        	$crp_prefer_countries = get_option('crp_prefer_countries', []); 
                        	if (empty($crp_prefer_countries)) {
	                        	$crp_prefer_countries = [];
                        	}
                        ?>
                         <select multiple name="crp_prefer_countries[]">
                             <?php foreach ($settingsArray['countries'] as $isoCode => $countryI18nArray) { ?>
                                 <?php $selectedAttr = in_array($isoCode, $crp_prefer_countries) ? " selected" : ""; ?>
                                 <option value="<?php echo esc_attr($isoCode) ?>"<?php echo $selectedAttr ?>><?php echo $countryI18nArray[$selectedLanguageString] ?></option>
                             <?php } ?>
                         </select>
                     </label>

                  </div>
               </div>
               </div>
               <?php submit_button(__('Generate shortcode', 'car-route-planner'), 'primary', 'crp_submit'); ?>
            </form>

            <h3><?php echo __("Copy shortcode", 'car-route-planner'); ?></h3>
              <div id="crp-shortcode-wrap">
                 <p><textarea rows="2" id="crp-shortcode"><?php echo esc_html(self::createShortcodeFromOptions()); ?></textarea></p>
                 <p><input type="button" class="button button-primary" id="crp-copy-button" data-clipboard-target="#crp-shortcode" value="<?php echo esc_attr(__('Copy shortcode to clipboard', 'car-route-planner'));?>"/></p>
                 <p><?php echo __("Copy this shortcode into your post or page to display the Route Planner.", 'car-route-planner'); ?></p>
              </div>
              <script>
                 var copyActionText = '<?php echo __('Copy shortcode to clipboard', 'car-route-planner');?>';
                 var copyOkText = '<?php echo __("Copied", 'car-route-planner'); ?>';
                 var crpAutocompleteUrl = "<?php echo $autocompleteUrlString; ?>";
              </script>
        </div>
<?php
    }

    private static function getConfigPageUrl() {
       return add_query_arg(array('page' => 'car-route-planner-config-page'), admin_url('options-general.php'));
    }

   private static function createShortcodeFromOptions() {
      $optionsArray = array();
      if (get_option('crp_shortcode_type') == 'advanced') {
         foreach (CarRoutePlanner::getShortcodeOptions() as $shortcodeOptionString) {
            $optionValue = get_option('crp_' . $shortcodeOptionString);
            if (empty($optionValue)) {
               continue;
            }
            if ($optionValue === 'on') {
               $optionsArray[] = $shortcodeOptionString;
            } else if (($shortcodeOptionString === 'only_countries') or ($shortcodeOptionString === 'prefer_countries')) {
               $optionsArray[] = $shortcodeOptionString . '="' . esc_attr(join(',', $optionValue)) . '"';
             } else {
               $optionsArray[] = $shortcodeOptionString . '="' . esc_attr($optionValue) . '"';
            }
         }
      }
      $shortcodeString = '[' . CarRoutePlanner::SHORTCODE;
      if ($optionsArray) {
         $shortcodeString .= ' ' . join(' ', $optionsArray);
      }
      $shortcodeString .= ']';
      return $shortcodeString;
   }

    private static function getLanguages() {
        $configArray = CarRoutePlanner::getConfig();
        $languagesArray = array();
        foreach ($configArray['i18nSettings'] as $domainArray) {
            $languagesArray[$domainArray['language']] = true;
        }
        return array_keys($languagesArray);
    }

    private static function getFuelConsumptionUnit($measureString) {
        if ($measureString == 'metric') {
            return self::getVolumeUnit($measureString) . "/100 " . self::getLengthUnit($measureString);
        }
        return __("mpg", 'car-route-planner');
    }

    private static function getFuelPriceUnit($currencyString, $measureString) {
        return $currencyString . "/" . self::getVolumeUnit($measureString);
    }

    private static function getSpeedUnit($measureString) {
        if ($measureString == 'metric') {
            return __("km/h", 'car-route-planner');
        }
        return __("mph", 'car-route-planner');
    }

    private static function getLengthUnit($measureString) {
        if ($measureString == 'metric') {
            return __("km", 'car-route-planner');
        }
        return __("mi", 'car-route-planner');
    }

    private static function getVolumeUnit($measureString) {
        if ($measureString == 'metric') {
            return __("L", 'car-route-planner');
        }
        return __("gal", 'car-route-planner');
    }
}