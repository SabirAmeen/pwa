var c;

function check() {
    /*the following code checkes whether the entered userid and password are matching*/
    if ($("#username").val() == "admin" && $("#password").val() == "admin") {
        console.log("hi");
        c = new PasswordCredential({
            id: $("#username").val(),
            password: $("#password").val()
        });
        navigator.credentials.store(c)
            .then(function() {
                alert(c.id);
            });
        window.location = "home.html"; /*opens the target page while Id & password matches*/
    } else {
        alert("Error Password or Username") /*displays error message*/
    }
}
