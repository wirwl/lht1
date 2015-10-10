var contacts=(function(){

    var init= function(){
        _setUpListeners();
    };

    var _setUpListeners=function() {
        $('#form-contacts').on('submit', _submitForm);
    };

    var _submitForm = function(ev){
        console.log('Отправка формы');
        ev.preventDefault();

        var form= $(this),
            url = 'contacts.php',
            defObj= _ajaxForm(form,url);

    };

    var _ajaxForm = function(form,ul){
        console.log('ajax запрос, но с проверкой!');
        if (!validation.validateForm(form)) return false;


    };

    return {
        init:init
    }


}());

contacts.init();