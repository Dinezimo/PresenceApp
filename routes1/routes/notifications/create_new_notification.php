<?php
require 'vendor/autoload.php';
include 'db_conn.php';

$email = $_GET['email'];
$name = $_GET['name'];
$msg = "L'individus $name souhaiterais rejoindre votre association";
if (isset($_GET['input'])){
    $input = $_GET['input'];
    $my_institution_id = "SELECT institution_id FROM Institutions WHERE name = $input";
    $admin_id = "SELECT user_id FROM Users WHERE institution_id = $my_institution_id AND role = 'admin'";
    $req = "INSERT INTO Notifications (user_id, message, created_at) VALUES ($admin_id, $msg, NOW())";
    if ($req == TRUE){
        echo "Message sent successfully <br>";
    } else {
        echo " A probvlem have occured";
    }
}
?>
