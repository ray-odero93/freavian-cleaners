$(document).ready(function () {
    $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $('#message').val();

            if (name == "" || email == "" || message == "") {
                alert("All fields must be filled out");
                return false;
            } else {

                alert("Thank you " + name + " for contacting us we will email you via " +  email + " that you have provided.");
            }
});
});
