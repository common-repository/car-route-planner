
export default function Save( { attributes } ) {

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
        return ( <> [crp] </> );
    }

    var attributesString = "";
    if (language) {
        attributesString += ' language="' + language + '"';
    }
    if (currency) {
        attributesString += ' currency="' + currency + '"';
    }
    if (measure) {
        attributesString += ' measure="' + measure + '"';
    }

    if (accent_color) {
        attributesString += ' accent_color="' + accent_color + '"';
    }
    if (background_color) {
        attributesString += ' background_color="' + background_color + '"';
    }
    if (text_color) {
        attributesString += ' text_color="' + text_color + '"';
    }
    if (disable_font_auto_tuning) {
        attributesString += ' disable_font_auto_tuning';
    }
    if (font_family) {
        attributesString += ' font_family="' + font_family + '"';
    }
    if (font_size) {
        attributesString += ' font_size="' + font_size + '"';
    }
    if (default_from) {
        attributesString += ' default_from="' + default_from + '"';
    }
    if (hide_from) {
        attributesString += ' hide_from';
    }
    if (default_to) {
        attributesString += ' default_to="' + default_to + '"';
    }
    if (hide_to) {
        attributesString += ' hide_to';
    }
    if (default_via) {
        attributesString += ' default_via="' + default_via + '"';
    }
    if (show_via) {
        attributesString += ' show_via';
    }
    if (show_fuel_calc) {
        attributesString += ' show_fuel_calc';
    }
    if (default_fuel_consumption) {
        attributesString += ' default_fuel_consumption="' + default_fuel_consumption + '"';
    }
    if (default_fuel_price) {
        attributesString += ' default_fuel_price="' + default_fuel_price + '"';
    }
    if (show_speed_profile) {
        attributesString += ' show_speed_profile';
    }
    if (default_speed_limit_motorway) {
        attributesString += ' default_speed_limit_motorway="' + default_speed_limit_motorway + '"';
    }
    if (default_speed_limit_other) {
        attributesString += ' default_speed_limit_other="' + default_speed_limit_other + '"';
    }
    if (show_result_length) {
        attributesString += ' show_result_length';
    }
    if (show_result_driving_time) {
        attributesString += ' show_result_driving_time';
    }
    if (show_result_fuel_amount) {
        attributesString += ' show_result_fuel_amount';
    }
    if (show_result_fuel_cost) {
        attributesString += ' show_result_fuel_cost';
    }
    if (show_result_customized_cost) {
        attributesString += ' show_result_customized_cost';
    }
    if (customized_cost_label) {
        attributesString += ' customized_cost_label="' + customized_cost_label + '"';
    }
    if (customized_cost_formula) {
        attributesString += ' customized_cost_formula="' + customized_cost_formula + '"';
    }
    if (show_result_map) {
        attributesString += ' show_result_map';
    }
    if (show_result_scheme) {
        attributesString += ' show_result_scheme';
    }
    if (calculate_instantly) {
        attributesString += ' calculate_instantly';
    }

    if (only_countries) {
        attributesString += ' only_countries="' + only_countries.join(',') + '"';
    }
    if (prefer_countries) {
        attributesString += ' prefer_countries="' + prefer_countries.join(',') + '"';
    }

    return (<> [crp { attributesString }] </>);
}