<?php
$type = $_SERVER["REQUEST_URI"];
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

file_put_contents('php://stderr', "Request Method: " . $_SERVER['REQUEST_METHOD'] . "\n");
file_put_contents('php://stderr', "Request URI: " . $_SERVER['REQUEST_URI'] . "\n");
echo $type;

switch ($type) {
    case "/Users":
        include "users/user_index.php";
        break;
    case "/institutions":
        include "Institutions/create_new_institution.php";
        break;
    default:
        http_response_code(404);
        echo "404 Not Found";
        break;
}
?>