$navbar = $('.nav-bar');
$updatedarticles = $('.updated-articles');
$transparentnav = $('.transparent-nav');
$trendingdropdownbtn=$('#trending-dropdown-btn');
$dropdownarrow=$('#dropdown-arrow');
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
function signout(){
    navigator.credentials.requireUserMediation();
    window.location = "index.html";
}