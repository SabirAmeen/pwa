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

//Home Page
$navbar = $('.nav-bar');
$updatedarticles = $('.updated-articles');
$transparentnav = $('.transparent-nav');
$trendingdropdownbtn = $('#trending-dropdown-btn');
$dropdownarrow = $('#dropdown-arrow');
$('.menu').click(function() {
    $navbar.show("fast");
    $transparentnav.show();
});
$transparentnav.click(function() {
    $navbar.hide("fast");
    $updatedarticles.hide("fast");
    $transparentnav.hide();
});
$('.article-toggle').click(function() {
    $updatedarticles.show("fast");
    $transparentnav.show();
});
$trendingdropdownbtn.click(function() {
    $('#trending-dropdown').slideToggle("fast");
    if ($dropdownarrow.text() === "\u25BC") {
        $dropdownarrow.text("\u25B2");
        $trendingdropdownbtn.css("background-color", "#fa4b2a");
        $dropdownarrow.css("color", "#FFF");
    } else {
        $dropdownarrow.text("\u25BC");
        $trendingdropdownbtn.css("background-color", "#f0f0f0");
        $dropdownarrow.css("color", "#fa4b2a");
    }
});

function signout() {
    navigator.credentials.requireUserMediation();
    window.location = "index.html";
}
