function Login(){
var username = "admin";
var password = "admin1234";

var username=document.getElementById("Uname");
var password=document.getElementById("Pass");
if(username.value == "admin" && password.value == "admin1234")
{
    window.location.replace("mainpage.html");
    // alert("correct details");
    // return false;
}
else{
    alert("Wrong Username or Password");
}
if(username.value == null || password.value == null)
{
    alert("fill the blank details");
    return false;
}
}



