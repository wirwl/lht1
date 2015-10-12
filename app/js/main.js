






// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;(function($) {
    // DOM Ready
    $(function() {
            if (!Modernizr.input.placeholder) {
                $('input, textarea').placeholder();
            }
    });

})(jQuery);