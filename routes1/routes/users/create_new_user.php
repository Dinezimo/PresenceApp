<?php
include "db_conn.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom_utilisateur = $data["name"];
    $email = $data["email"];
    $mot_de_passe = password_hash($data["password"], PASSWORD_DEFAULT);
    $institution_id = $data["institution_id"];
    $role = $data["role"] ?? 'userlite';

    $sql2 = "SELECT * FROM Users WHERE email = ?";
    $prepa2 = $conn->prepare($sql2);
    $prepa2->bind_param("s", $email);
    $prepa2->execute();
    $prepa2->store_result();

    if ($prepa2->num_rows > 0) {
        echo "Erreur : L'email existe déjà.";
    } else {
        $sql = "INSERT INTO Users (institution_id, name, email, password, role) VALUES (?, ?, ?, ?, ?)";
        $prepa = $conn->prepare($sql);
        $prepa->bind_param("issss", $institution_id, $nom_utilisateur, $email, $mot_de_passe, $role);
        
        if ($prepa->execute()) {
            echo http_response_code(200);
            echo "Nouvel utilisateur créé avec succès !";
        } else {
            echo "Erreur lors de la création de l'utilisateur : " . $prepa->error;
        }
        $prepa->close();
    }
    $prepa2->close();
}

$conn->close();
?>
