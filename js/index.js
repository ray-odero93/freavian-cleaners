function Login(){
var username=document.getElementById("Uname").value;
var userpassword=document.getElementById("Pass").value;
if(username=="admin" && password=="123")
{
    window.location.replace("mainpage.html");
}
else{
    alert("Wrong details");
}
}

