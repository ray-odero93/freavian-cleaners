function Login(){
var username = "admin";
var password = "123";

var username=document.getElementById("Uname");
var password=document.getElementById("Pass");
if(username.value == "admin" && password.value == "admin1234")
{
    window.location.replace("");
    // alert("correct details");
    // return false;
}
else{
    alert("Wrong Username or Password");
    return false;
}
}
$('#first-form').submit(function(Login) {
    var username = $('#username').val();
    var password = $('#password').val();
    $(".error").remove();
    if (username.length < 1) {
      $('#username').after('<span class="error">Insert your username</span>');
    }
    if (password.length < 1) {
      $('#password').after('<span class="error">Insert your password</span>');
    }
  });



