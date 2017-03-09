<?php
$username = trim($_POST['username']);
$password = trim($_POST['pass']);

if($username == "admin" && $password == "admin"){
	echo home.html;
}
?>