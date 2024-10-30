jQuery(document).ready(function($) {

    $("#crp-settings-accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    var clipboard = new ClipboardJS('#crp-copy-button');
    clipboard.on('success', function(e) {
        $('#crp-copy-button').prop('value', copyOkText);
    });

    $("#crp-simple-config").click(function() {
        selectSimpleShortcode();
    });

    $("#crp-advanced-config").click(function() {
        selectAdvancedShortcode();
    });

    if ($("#crp-simple-config").is(':checked')) {
        selectSimpleShortcode();
    } else {
        selectAdvancedShortcode();
    }

    crpAutocompleteNamespace.assignAutocomplete('input[name="crp_default_from"]', crpAutocompleteUrl);
    crpAutocompleteNamespace.assignAutocomplete('input[name="crp_default_to"]', crpAutocompleteUrl);
    crpAutocompleteNamespace.assignAutocomplete('input[name="crp_default_via"]', crpAutocompleteUrl, true);

    $('.color-field').wpColorPicker();

    function selectSimpleShortcode() {
        $("#crp-settings-accordion input").prop('disabled', true);
        $("#crp-settings-accordion select").prop('disabled', true);
    }
    function selectAdvancedShortcode() {
        $("#crp-settings-accordion input").prop('disabled', false);
        $("#crp-settings-accordion select").prop('disabled', false);
    }
});
