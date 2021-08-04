function Login(){
var username = "admin";
var password = "123";

var username=document.getElementById("Uname");
var password=document.getElementById("Pass");
if(username.value == "admin" && password.value == "123")
{
    window.location.replace("mainpage.html");
    // alert("correct details");
    // return false;
}
else{
    alert("Wrong Username or Password");
}
if(username.value == "" || password.value == "")
{
    alert("fill the blank details");
}
}



