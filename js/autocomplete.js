jQuery(document).ready(function($) {

    function assignAutocomplete(elementLocator, ajaxRequestUrl, allowMultiSelect) {
        var cache = {};
        var lastXhr;

        $(elementLocator).autocomplete({
            minLength: 2,
            source: function (request, response) {
                var term = extractLast(request.term);

                if (term in cache) {
                    response(cache[term]);
                    return;
                }

                lastXhr = $.getJSON(ajaxRequestUrl.replace('TERM', term), {}, function (data, status, xhr) {
                    cache[term] = data;
                    if (xhr === lastXhr) {
                        response(data);
                    }
                });
            },
            search: function () {
                var term = extractLast(this.value);

                if (term.length < 2) {          // custom minLength
                    return false;
                }
            },
            focus: function () {
                return false;                   // prevent value inserted on focus
            },
            select: function (event, ui) {
                if (allowMultiSelect) {
                    var terms = split(this.value);
                    terms.pop();                // remove the current input
                    terms.push(ui.item.value);  // add the selected item
                    terms.push("");             // add placeholder to get the comma-and-space at the end
                    this.value = terms.join("; ");

                    return false;
                } else {
                    return true;
                }
            }
        });

        function extractLast(term) {
            return split(term).pop();
        }

        function split(val) {
            return val.split(/;\s*/);
        }
    }

    crpAutocompleteNamespace = new function () {
        this.assignAutocomplete = function (elementLocator, ajaxRequestUrl, allowMultiSelect) {
            assignAutocomplete(elementLocator, ajaxRequestUrl, allowMultiSelect);
            $(elementLocator).attr("autocomplete", "off"); // disable default browser autocomplete
        }
    };

});