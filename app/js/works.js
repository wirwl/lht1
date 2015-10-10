var myModule = (function () {

    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {
        console.log('we in _setUpListeners function');
        $('#addproject').on('click', _showModal);
        $('#form-addnewproject').on('submit', _addProject);
        $('.form-msg-close').on('click', _hideMSG);
    };

    var _hideMSG = function () {
        $(this).parent().hide();
    };

    var _showModal = function (e) {
        e.preventDefault();

        var divPopup = $('#addproject_popup'),
            form=divPopup.find('.wrapper-form');

        divPopup.bPopup({
            closeClass: 'addproject-button-close',
            onClose: function () {
                $('.form-success').hide();
                $('.form-error').hide();
                form.trigger('reset');
            }
        });
    };

    var _addProject = function (e) {
        e.preventDefault();
        var form = $('#form-addnewproject'),
            url = 'php/anp.php',
            answer = _ajaxForm(form, url);

            if(answer) {
                answer.done(function (ans) {
                    console.log("Done.Answer: " + ans);
                    if (ans.status === 'OK') {
                        form.find('.form-error').hide();
                        form.find('.form-success').show();
                    } else {
                        form.find('.form-success').hide();
                        form.find('.form-error').show();
                    }
                });
            }
    };


    var _ajaxForm = function (form, url) {
        if (!validation.validateForm(form)) return false;
        data = form.serialize();

        var result = $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data
        }).fail(function (ans) {
            form.find('.error-mes').text('На сервере произошла ошибка').show();
        })
        return result;
    }

    return {
        init: init
    };
}());

myModule.init();


//// Semicolon (;) to ensure closing of earlier scripting
//// Encapsulation
//// $ is assigned to jQuery
//;(function($) {
//
//    // DOM Ready
//    $(function() {
//
//        // Binding a click event
//        // From jQuery v.1.7.0 use .on() instead of .bind()
//        $('#addproject').bind('click', function(e) {
//
//            // Prevents the default action to be triggered.
//            e.preventDefault();
//
//            // Triggering bPopup when click event is fired
//            $('#addproject_popup').bPopup({
//                closeClass:'addproject-button-close'
//        });
//
//        });
//
//
//        document.getElementById("uploadBtn").onchange = function () {
//            document.getElementById("uploadFile").value = this.value;
//        };
//
//        /*
//        $('#wrapper-image').hover(function() {
//            $(this).children('.works-item-image').fadeToggle(999);
//        });*/
//
//
//
//    });
//
//})(jQuery);