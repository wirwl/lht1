// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;(function($) {

    // DOM Ready
    $(function() {

        // Binding a click event
        // From jQuery v.1.7.0 use .on() instead of .bind()
        $('#addproject').bind('click', function(e) {

            // Prevents the default action to be triggered.
            e.preventDefault();

            // Triggering bPopup when click event is fired
            $('#addproject_popup').bPopup({
                closeClass:'addproject-button-close'
        });

        });


        document.getElementById("uploadBtn").onchange = function () {
            document.getElementById("uploadFile").value = this.value;
        };




    });

})(jQuery);