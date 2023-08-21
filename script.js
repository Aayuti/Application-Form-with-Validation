$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        var username = $("#username").val();
        var password = $("#password").val();
        var check = $("agree").val();
        var valid = true;

        $(".error").text("");

        if(username === "") {
            $("#usernameError").text("Username is required");
            valid = false;
        }

        if(password === "") {
            $("#passwordError").text("Password is required");
            valid = false;
        }

        if($('#agree').prop('checked') == false) {
            valid = false;
            alert("You must agree to the terms and conditions")
        }

        if(valid == false) {
            event.preventDefault();
        }

    });

});