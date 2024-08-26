<?php
include "db_conn.php";

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "POST": {
        include('./users/create_new_user.php');
        break;
    }
    case "GET": {
        if (empty($_GET)) {
            include "./get_all_users.php";
        } else
            include "./get_user_byID.php";
        break;
        }
    case "PUT": {
        include "./update_user_byID.php";
        break;
    }
    case "DELETE": {
        include "./delete_user_byID.php";
        break;
    }
}

?>