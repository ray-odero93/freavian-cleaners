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

    function check_fname(){
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_fname").val();
        if (pattern.test(fname) && fname !== ''){
            $("#fname_error_message").hide();
            $("#form_fname").css("border-bottom","2px solid  #34F458");
        } else{
            $("#fname_error_message").html("Should contain Characters");
            $("#fname_error_message").show();
            $("#form_fname").css("border-bottom","2px solid  #F90A0A");
            error_fname = true;

        }
    
    }
    function check_sname(){
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_sname").val();
        if (pattern.test(fname) && fname !== ''){
            $("#sname_error_message").hide();
            $("#form_sname").css("border-bottom","2px solid  #34F458");
        } else{
            $("#sname_error_message").html("Should contain Characters");
            $("#sname_error_message").show();
            $("#form_sname").css("border-bottom","2px solid  #F90A0A");
            error_sname = true;

        }
    
    }

   

});