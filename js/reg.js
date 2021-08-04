$(function(){
    $("#fname_error_message").hide();
    $("#sname_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#retype_password_error_message").hide();

    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    $("#form_fname").focusout(function(){
        check_fname();
    });
    $("#form_sname").focusout(function(){
        check_sname();
    });
    $("#form_email").focusout(function(){
        check_email();
    });
    $("#form_password").focusout(function(){
        check_password();
    });
    $("#form_retype_password").focusout(function(){
        check_retype_password();
    });

   

});