var c;

navigator.credentials.get({
    password: true,
    unmediated: true, // request a credential without user mediation
    federated: {
        providers: [
            'https://account.google.com',
            'https://www.facebook.com'
        ]
    }
}).then(function(cred) {
    if (cred) {
        console.log(cred.id);
        if (cred.id == "admin") {
            window.location = "home.html";
        }
    }
})


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
                console.log("stored")
            });
        window.location = "home.html"; /*opens the target page while Id & password matches*/
    } else {
        alert("Error Password or Username") /*displays error message*/
    }
}
