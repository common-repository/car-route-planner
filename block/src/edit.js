import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import metadata from './block.json';
import config from './config.json';

import {
    RadioControl,
    SelectControl,
    ColorPicker,
    ColorIndicator,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    CheckboxControl,
    ExternalLink,
    Disabled,
    TextControl,
    PanelBody,
    PanelRow,
} from '@wordpress/components';



export default function Edit( { attributes, setAttributes } ) {

    const {
            mode, language, currency, measure,
            text_color, background_color, accent_color,
            disable_font_auto_tuning, font_family, font_size,
            default_from, hide_from, default_to, hide_to, default_via, show_via,
            show_fuel_calc, default_fuel_consumption, default_fuel_price,
            show_speed_profile, default_speed_limit_motorway, default_speed_limit_other,
            show_result_length, show_result_driving_time, show_result_fuel_amount, show_result_fuel_cost,
            show_result_customized_cost, customized_cost_label, customized_cost_formula,
            show_result_map, show_result_scheme, calculate_instantly,
            only_countries, prefer_countries
        } = attributes;

    const modeFieldsetDisabled = (mode == 'simple');
    const onChangeMode = ( newMode ) => {
        const modeFieldset = document.getElementById("crp-advanced-group");
        if ("simple" == newMode) {
            modeFieldset.setAttribute("disabled", "disabled");
        } else {
            modeFieldset.removeAttribute("disabled");
        }
        setAttributes( { mode: newMode } );
    };
    const onChangeLanguage = ( newLanguage ) => { setAttributes( { language: newLanguage } ); };
    const onChangeCurrency = ( newCurrency ) => { setAttributes( { currency: newCurrency } ); };
    const onChangeMeasure = ( newMeasure ) => { setAttributes( { measure: newMeasure } ); };
    const onChangeTextColor = ( newColor ) => { setAttributes( { text_color: newColor } ); };
    const onChangeBackgroundColor = ( newColor ) => { setAttributes( { background_color: newColor } ); };
    const onChangeAccentColor = ( newColor ) => { setAttributes( { accent_color: newColor } ); };

    const fontFieldsetDisabled = (disable_font_auto_tuning == false);
    const onChangeDisableFontAutotuning = ( newValue ) => {
        const fontFieldset = document.getElementById("crp-font-group");
        if (false == newValue) {
            fontFieldset.setAttribute("disabled", "disabled");
        } else {
            fontFieldset.removeAttribute("disabled");
        }
        setAttributes( { disable_font_auto_tuning: newValue } );
    };
    const onChangeFontFamily = ( newValue ) => { setAttributes( { font_family: newValue } ); };
    const onChangeFontSize = ( newValue ) => { setAttributes( { font_size: newValue } ); };

    const onChangeDefaultFrom = ( newValue ) => { setAttributes( { default_from: newValue } ); };
    const onChangeHideFrom = ( newValue ) => { setAttributes( { hide_from: newValue } ); };
    const onChangeDefaultTo = ( newValue ) => { setAttributes( { default_to: newValue } ); };
    const onChangeHideTo = ( newValue ) => { setAttributes( { hide_to: newValue } ); };
    const onChangeDefaultVia = ( newValue ) => { setAttributes( { default_via: newValue } ); };
    const onChangeShowVia = ( newValue ) => { setAttributes( { show_via: newValue } ); };
    const onChangeShowFuelCalc = ( newValue ) => {setAttributes( { show_fuel_calc: newValue } );};
    const onChangeDefaultFuelConsumption = ( newValue ) => { setAttributes( { default_fuel_consumption: newValue } ); };
    const onChangeDefaultFuelPrice = ( newValue ) => { setAttributes( { default_fuel_price: newValue } ); };
    const onChangeShowSpeedProfile = ( newValue ) => { setAttributes( { show_speed_profile: newValue } ); };
    const onChangeDefaultSpeedLimitMotorway = ( newValue ) => { setAttributes( { default_speed_limit_motorway: newValue } ); };
    const onChangeDefaultSpeedLimitOther = ( newValue ) => { setAttributes( { default_speed_limit_other: newValue } ); };
    const onChangeShowResultLength = ( newValue ) => { setAttributes( { show_result_length: newValue } ); };
    const onChangeShowResultDrivingTime = ( newValue ) => { setAttributes( { show_result_driving_time: newValue } ); };
    const onChangeShowResultFuelAmount = ( newValue ) => { setAttributes( { show_result_fuel_amount: newValue } ); };
    const onChangeShowResultFuelCost = ( newValue ) => { setAttributes( { show_result_fuel_cost: newValue } ); };
    const customizedCostFieldsetDisabled = (show_result_customized_cost == false);
    const onChangeShowResultCustomizedCost = ( newValue ) => {
        const customizedCostFieldset = document.getElementById("crp-customized-cost-group");
        if (false == newValue) {
            customizedCostFieldset.setAttribute("disabled", "disabled");
        } else {
            customizedCostFieldset.removeAttribute("disabled");
        }
        setAttributes( { show_result_customized_cost: newValue } );
    };
    const onChangeCustomizedCostLabel = ( newValue ) => { setAttributes( { customized_cost_label: newValue } ); };
    const onChangeCustomizedCostFormula = ( newValue ) => { setAttributes( { customized_cost_formula: newValue } ); };
    const onChangeShowResultMap = ( newValue ) => { setAttributes( { show_result_map: newValue } ); };
    const onChangeShowResultScheme = ( newValue ) => { setAttributes( { show_result_scheme: newValue } ); };
    const onChangeCalculateInstantly = ( newValue ) => { setAttributes( { calculate_instantly: newValue } ); };
    const onChangeOnlyCountries = ( newValue ) => { setAttributes( { only_countries: newValue } ); };
    const onChangePreferCountries = ( newValue ) => { setAttributes( { prefer_countries: newValue } ); };


    const languageOptions = config.languages.map(
        function (item) { return {"label": item, "value": item}; }
    );
    const currencyOptions = config.currencies.map(
        function (item) { return {"label": item, "value": item}; }
    );
    const fontFamilyOptions = config.fonts.map(
        function (item) { return {"label": item, "value": item}; }
    );
    const fontSizeOptions = [
        {"label": "13 px", "value": "13px"},
        {"label": "14 px", "value": "14px"},
        {"label": "15 px", "value": "15px"},
        {"label": "16 px", "value": "16px"},
        {"label": "17 px", "value": "17px"},
        {"label": "18 px", "value": "18px"},
        {"label": "19 px", "value": "19px"},
        {"label": "20 px", "value": "20px"},
        {"label": "0.5 rem", "value": "0.5rem"},
        {"label": "0.6 rem", "value": "0.6rem"},
        {"label": "0.7 rem", "value": "0.7rem"},
        {"label": "0.8 rem", "value": "0.8rem"},
        {"label": "0.9 rem", "value": "0.9rem"},
        {"label": "1 rem", "value": "1rem"},
        {"label": "1.1 rem", "value": "1.1rem"},
        {"label": "1.2 rem", "value": "1.2rem"},
        {"label": "1.3 rem", "value": "1.3rem"},
        {"label": "1.4 rem", "value": "1.4rem"},
        {"label": "1.5 rem", "value": "1.5rem"}
    ];
    const measureOptions = [
        {"label": __( "Kilometer, liter", "car-route-planner" ), "value": "metric"},
        {"label": __( "Mile, UK gallon", "car-route-planner" ), "value": "imperial"},
        {"label": __( "Mile, US gallon", "car-route-planner" ), "value": "us_cust"}
    ];
    const modeOptions = [
        {"label": __( "Minimalistic mode, results will be displayed on plugin developer's website.", "car-route-planner" ) , "value": "simple"},
        {"label": __( "Advanced mode, results will be displayed inside iframe with 'powered by' hyperlink.", "car-route-planner" ) , "value": "advanced"}
    ];
    const onlyCountriesOptions = config.countries.map(
        function (item) { return {"label": item.name, "value": item.iso}; }
    );
    const preferCountriesOptions = config.countries.map(
        function (item) { return {"label": item.name, "value": item.iso}; }
    );


    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Mode', 'car-route-planner' ) } initialOpen={ true } >
                    <PanelRow>
                        <RadioControl
                            label={ __( 'Mode', 'car-route-planner' ) }
                            selected={ mode }
                            options={ modeOptions }
                            onChange={ onChangeMode }
                        />
                    </PanelRow>
                </PanelBody>
                <fieldset id="crp-advanced-group" disabled={ modeFieldsetDisabled } >
                <PanelBody title={ __( 'General Settings', 'car-route-planner' ) } initialOpen={ true } >
                    <PanelRow>
                        <SelectControl
                            label={ __( 'Language', 'car-route-planner' ) }
                            value={ language }
                            options={ languageOptions }
                            onChange={ onChangeLanguage }
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={ __( 'Currency', 'car-route-planner' ) }
                            value={ currency }
                            options={ currencyOptions }
                            onChange={ onChangeCurrency }
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={ __( 'Units', 'car-route-planner' ) }
                            value={ measure }
                            options={ measureOptions }
                            onChange={ onChangeMeasure }
                        />
                    </PanelRow>
                </PanelBody>
                <PanelBody title={ __( 'Design', 'car-route-planner' ) } initialOpen={ false } >
                    <PanelRow>
                        <CheckboxControl
                            label={ __( 'Manual font selection', 'car-route-planner' ) }
                            help={ __( 'Disable automatic font detection', 'car-route-planner' ) }
                            checked={disable_font_auto_tuning}
                            onChange={onChangeDisableFontAutotuning}
                        />
                    </PanelRow>
                    <fieldset id="crp-font-group" disabled={ fontFieldsetDisabled }>
                    <PanelRow>
                        <SelectControl
                            label={ __( 'Font family', 'car-route-planner' ) }
                            value={font_family}
                            options={fontFamilyOptions}
                            onChange={onChangeFontFamily}
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={ __( 'Font size', 'car-route-planner' ) }
                            value={font_size}
                            options={fontSizeOptions}
                            onChange={onChangeFontSize}
                        />
                    </PanelRow>
                    </fieldset>
                    <PanelRow>
                        <VStack>
                            <Text>{ __( 'Text color', 'car-route-planner' ) }</Text>
                            <ColorPicker
                            color={text_color}
                            onChange={onChangeTextColor}
                            copyFormat="hex"
                            />
                        </VStack>
                    </PanelRow>
                    <PanelRow>
                        <VStack>
                            <Text>{ __( 'Background color', 'car-route-planner' ) }</Text>
                            <ColorPicker
                                color={background_color}
                                onChange={onChangeBackgroundColor}
                                copyFormat="hex"
                            />
                        </VStack>
                    </PanelRow>
                    <PanelRow>
                        <VStack>
                            <Text>{ __( 'Accent color', 'car-route-planner' ) }</Text>
                            <ColorPicker
                                color={accent_color}
                                onChange={onChangeAccentColor}
                                copyFormat="hex"
                            />
                        </VStack>
                    </PanelRow>
                </PanelBody>
                <PanelBody title={ __( 'Form', 'car-route-planner' ) } initialOpen={ false } >
                    <PanelRow>
                        <TextControl
                            label={ sprintf(__( 'Default value for "%s"', 'car-route-planner' ), __( 'From', 'car-route-planner' )) }
                            value={ default_from }
                            onChange={onChangeDefaultFrom}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ sprintf(__( 'hide "%s"', 'car-route-planner' ), __( 'From', 'car-route-planner' )) }
                            checked={ hide_from }
                            onChange={onChangeHideFrom}
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label={ sprintf(__( 'Default value for "%s"', 'car-route-planner' ), __( 'To', 'car-route-planner' )) }
                            value={ default_to }
                            onChange={onChangeDefaultTo}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ sprintf(__( 'hide "%s"', 'car-route-planner' ), __( 'To', 'car-route-planner' )) }
                            checked={ hide_to }
                            onChange={onChangeHideTo}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={  sprintf(__( 'show "%s"', 'car-route-planner' ), __( 'Intermediate points', 'car-route-planner' )) }
                            checked={ show_via }
                            onChange={onChangeShowVia}
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label={ sprintf(__( 'Default value for "%s"', 'car-route-planner' ), __( 'Intermediate points', 'car-route-planner' )) }
                            value={ default_via }
                            onChange={onChangeDefaultVia}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ __( 'show fuel calculator', 'car-route-planner' ) }
                            checked={ show_fuel_calc }
                            onChange={onChangeShowFuelCalc}
                        />
                    </PanelRow>

                        <PanelRow>
                            <TextControl
                                label={ sprintf(__( 'Default value for "%s"', 'car-route-planner' ), __( 'Fuel consumption', 'car-route-planner' )) }
                                value={ default_fuel_consumption }
                                onChange={onChangeDefaultFuelConsumption}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={ sprintf(__( 'Default value for "%s"', 'car-route-planner' ), __( 'Fuel price', 'car-route-planner' )) }
                                value={ default_fuel_price }
                                onChange={onChangeDefaultFuelPrice}
                            />
                        </PanelRow>

                        <PanelRow>
                            <CheckboxControl
                                label={ __( 'show "Maximum speed" fields', 'car-route-planner' ) }
                                checked={ show_speed_profile }
                                onChange={onChangeShowSpeedProfile}
                            />
                        </PanelRow>

                        <PanelRow>
                            <TextControl
                                label={ __( 'Maximum speed on motorway', 'car-route-planner' ) }
                                value={ default_speed_limit_motorway }
                                onChange={onChangeDefaultSpeedLimitMotorway}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={ __( 'Maximum speed on other roads', 'car-route-planner' ) }
                                value={ default_speed_limit_other }
                                onChange={onChangeDefaultSpeedLimitOther}
                            />
                        </PanelRow>

                </PanelBody>
                <PanelBody title={ __( 'Results', 'car-route-planner' ) } initialOpen={ false } >
                    <PanelRow>
                        <CheckboxControl
                            label={ sprintf(__( 'show "%s"', 'car-route-planner' ), __( 'Route length', 'car-route-planner' )) }
                            checked={ show_result_length }
                            onChange={onChangeShowResultLength}
                         />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ sprintf(__( 'show "%s"', 'car-route-planner' ), __( 'Driving time', 'car-route-planner' )) }
                            checked={ show_result_driving_time }
                            onChange={onChangeShowResultDrivingTime}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ sprintf(__( 'show "%s"', 'car-route-planner' ), __( 'Fuel amount', 'car-route-planner' )) }
                            checked={ show_result_fuel_amount }
                            onChange={onChangeShowResultFuelAmount}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ sprintf(__( 'show "%s"', 'car-route-planner' ), __( 'Fuel cost', 'car-route-planner' )) }
                            checked={ show_result_fuel_cost }
                            onChange={onChangeShowResultFuelCost}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ sprintf(__( 'show "%s"', 'car-route-planner' ), __( 'Customized cost', 'car-route-planner' ))  }
                            checked={ show_result_customized_cost }
                            onChange={onChangeShowResultCustomizedCost}
                        />
                    </PanelRow>
                    <fieldset id="crp-customized-cost-group" disabled={ customizedCostFieldsetDisabled }>
                        <PanelRow>
                            <TextControl
                                label={ __( 'Formula for "Customized cost"', 'car-route-planner' ) }
                                value={ customized_cost_formula }
                                onChange={onChangeCustomizedCostFormula}
                            />
                        </PanelRow>
                        <PanelRow>
                            <ExternalLink href={ getUrl(language, currency, measure) + "/widget/v1/doc#customized_cost" }>{ __('how to compose formula', 'car-route-planner') }</ExternalLink>
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={ __( 'Label for "Customized cost"', 'car-route-planner' ) }
                                value={ customized_cost_label }
                                onChange={onChangeCustomizedCostLabel}
                            />
                        </PanelRow>
                    </fieldset>
                    <PanelRow>
                        <CheckboxControl
                            label={ __( 'show map', 'car-route-planner' ) }
                            checked={ show_result_map }
                            onChange={onChangeShowResultMap}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                            label={ __( 'show route scheme', 'car-route-planner' ) }
                            checked={ show_result_scheme }
                            onChange={onChangeShowResultScheme}
                        />
                    </PanelRow>
                    <PanelRow>
                        <CheckboxControl
                        label={ __( 'calculate route automatically on page load', 'car-route-planner' ) }
                        checked={ calculate_instantly }
                        onChange={onChangeCalculateInstantly}
                        />
                    </PanelRow>

                    <PanelRow>
                        <SelectControl
                            label={ __( 'strictly limit results by countries', 'car-route-planner' ) }
                            value={ only_countries }
                            options={ onlyCountriesOptions }
                            onChange={ onChangeOnlyCountries }
                            multiple="true"
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={ __( 'soft preference for countries', 'car-route-planner' ) }
                            value={ prefer_countries }
                            options={ preferCountriesOptions }
                            onChange={ onChangePreferCountries }
                            multiple="true"
                        />
                    </PanelRow>

                </PanelBody>
                </fieldset>
            </InspectorControls>

            <div { ...useBlockProps() }>
                <Disabled>
                    <iframe sandbox="allow-scripts" allowTransparency="true" src={ "data:text/html," + encodeURIComponent(getHtmlBlockPreview(attributes)) }></iframe>
                </Disabled>
            </div>
        </>
    );


}


function getHtmlBlockPreview(attributes) {

    const {
        mode, language, currency, measure,
        text_color, background_color, accent_color,
        disable_font_auto_tuning, font_family, font_size,
        default_from, hide_from, default_to, hide_to, default_via, show_via,
        show_fuel_calc, default_fuel_consumption, default_fuel_price,
        show_speed_profile, default_speed_limit_motorway, default_speed_limit_other,
        show_result_length, show_result_driving_time, show_result_fuel_amount, show_result_fuel_cost,
        show_result_customized_cost, customized_cost_label, customized_cost_formula,
        show_result_map, show_result_scheme, calculate_instantly,
        only_countries, prefer_countries
        } = attributes;

    if (mode == "simple") {

        return '' +
            '<style>.crp-simple-form .crp-table {    display: table;}.crp-simple-form .crp-tr {    display: table-row;}.crp-simple-form .crp-tr .crp-td {    display: table-cell;    vertical-align: bottom;    padding-left: 1em;}.crp-simple-form .crp-tr .crp-td:first-child {    padding-left: 0;}.crp-simple-form .crp-tr .crp-td {    padding-top: 1em;}.crp-simple-form .crp-tr:first-child .crp-td {    padding-top: 0;}.crp-simple-form .crp-submit {    margin-top: 1em;}</style>' +
            '<form class="crp-simple-form" action="#">' +
                '<div class="crp-table">' +
                    '<div class="crp-tr">' +
                        '<div class="crp-td">' +
                            '<label for="crp-from">' + __( 'From', 'car-route-planner' ) + '</label>' +
                        '</div>' +
                        '<div class="crp-td">' +
                            '<input type="text" name="from" id="crp-from">' +
                        '</div>' +
                    '</div>' +
                    '<div class="crp-tr">' +
                        '<div class="crp-td">' +
                            '<label for="crp-to">' + __( 'To', 'car-route-planner' ) + '</label>' +
                        '</div>' +
                        '<div class="crp-td">' +
                            '<input type="text" name="to" id="crp-to">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<input type="submit" value="' + __( 'Calculate', 'car-route-planner' ) + '" class="crp-submit">' +
            '</form>';
    }

    var attributesString = "";
    if (language) {
        attributesString += ' data-language="' + language + '"';
    }
    if (currency) {
        attributesString += ' data-currency="' + currency + '"';
    }
    if (measure) {
        attributesString += ' data-measure="' + measure + '"';
    }
    if (accent_color && background_color && text_color) {
        attributesString += ' data-css="' + getUrl(language, currency, measure) + "/widget/v1/widget.css?pc=" + accent_color.replace('#', '') + "&bc=" + background_color.replace('#', '') + "&tc=" + text_color.replace('#', '') + '"';
    }
    if (disable_font_auto_tuning) {
        attributesString += ' data-disable-font-auto-tuning';
    }
    if (font_family) {
        attributesString += ' data-font-family="' + font_family + '"';
    }
    if (font_size) {
        attributesString += ' data-font-size="' + font_size + '"';
    }
    if (default_from) {
        attributesString += ' data-default-from="' + default_from + '"';
    }
    if (hide_from) {
        attributesString += ' data-hide-from';
    }
    if (default_to) {
        attributesString += ' data-default-to="' + default_to + '"';
    }
    if (hide_to) {
        attributesString += ' data-hide-to';
    }
    if (default_via) {
        attributesString += ' data-default-via="' + default_via + '"';
    }
    if (show_via) {
        attributesString += ' data-show-via';
    }
    if (show_fuel_calc) {
        attributesString += ' data-show-fuel-calc';
    }
    if (default_fuel_consumption) {
        attributesString += ' data-default-fuel-consumption="' + default_fuel_consumption + '"';
    }
    if (default_fuel_price) {
        attributesString += ' data-default-fuel-price="' + default_fuel_price + '"';
    }
    if (show_speed_profile) {
        attributesString += ' data-show-speed-profile';
    }
    if (default_speed_limit_motorway) {
        attributesString += ' data-default-speed-limit-mototrway="' + default_speed_limit_motorway + '"';
    }
    if (default_speed_limit_other) {
        attributesString += ' data-default-speed-limit-other="' + default_speed_limit_other + '"';
    }
    if (show_result_length) {
        attributesString += ' data-show-result-length';
    }
    if (show_result_driving_time) {
        attributesString += ' data-show-result-driving-time';
    }
    if (show_result_fuel_amount) {
        attributesString += ' data-show-result-fuel-amount';
    }
    if (show_result_fuel_cost) {
        attributesString += ' data-show-result-fuel-cost';
    }
    if (show_result_customized_cost) {
        attributesString += ' data-show-result-customized-cost';
    }
    if (customized_cost_label) {
        attributesString += ' data-customized-cost-label="' + customized_cost_label + '"';
    }
    if (customized_cost_formula) {
        attributesString += ' data-customized-cost-formula="' + customized_cost_formula + '"';
    }
    if (show_result_map) {
        attributesString += ' data-show-result-map';
    }
    if (show_result_scheme) {
        attributesString += ' data-show-result-scheme';
    }
    if (calculate_instantly) {
        attributesString += ' data-calculate-instantly';
    }
    if (only_countries) {
        attributesString += ' data-only-countries="' + only_countries.join(',') + '"';
    }
    if (prefer_countries) {
        attributesString += ' data-prefer-countries="' + prefer_countries.join(',') + '"';
    }

    return '<a href="' + getUrl(language, currency, measure) + '" ' + attributesString + ' class="rp-widget-link"></a>' +
        '<script src="' + getUrl(language, currency, measure) + '/widget/v1/client.js"></script>';
}


function getUrl(language, currency, measure) {
    var url = "";
    config.i18nSettings.forEach(function(struct){
        if ((language == struct.language) && (currency == struct.currency) && (measure == struct.measurement)) {
            url = struct.url;
        }
    });
    if (! url) {
        config.i18nSettings.forEach(function(struct){
            if (language == struct.language) {
                url = struct.url;
            }
        });
    }
    if (! url) {
        config.i18nSettings.forEach(function(struct){
            if (struct.default) {
                url = struct.url;
            }
        });
    }
    return url;
}