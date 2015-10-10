






// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;(function($) {
    // DOM Ready
    $(function() {
            console.log("1");
            if (!Modernizr.input.placeholder) {
                console.log("2");
                $('input, textarea').placeholder();
            }
    });

})(jQuery);