<?php
include "db_conn.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom_utilisateur = $data["name"];
    $email = $data["email"];
    $mot_de_passe = password_hash($data["password"], PASSWORD_DEFAULT);

    $sql2 = "SELECT * FROM Users WHERE email = ?";
    $prepa2 = $conn->prepare($sql2);
    $prepa2->bind_param("s", $email);
    $prepa2->execute();
    $prepa2->store_result();

    if ($prepa2->num_rows > 0) {
        echo json_encode(["error" => "Error :  This email exist already."]);
    } else {
        $sql = "INSERT INTO Users (name, email, password) VALUES (?, ?, ?)";
        $prepa = $conn->prepare($sql);
        $prepa->bind_param("sss", $nom_utilisateur, $email, $mot_de_passe);
        
        if ($prepa->execute()) {
            echo http_response_code(200);
            echo json_encode(["msg" => "New user created with succès !"]);
        } else {
            echo json_encode(["error" => "Error during account creation : " . $prepa->error]);
        }
        $prepa->close();
    }
    $prepa2->close();
}

$conn->close();
?>
