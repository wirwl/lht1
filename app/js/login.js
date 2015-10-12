

var login=(function(){
    var init= function(){
        _setUpListeners();
    };
    var _setUpListeners=function() {
        $('.form-login').on('submit', _submitForm);
    };
    var _submitForm = function(ev){
        ev.preventDefault();
        var form= $(this),
            url = 'login.php',
            defObj= _ajaxForm(form,url);

    };
    var _ajaxForm = function(form,ul){
        if (!validation.validateForm(form)) return false;
    };
    return {
        init:init
    }
}());

login.init();