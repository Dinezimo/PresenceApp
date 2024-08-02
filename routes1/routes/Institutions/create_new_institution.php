<?php
include "db_conn.php";

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    $nom_institution = $data["name"] ?? '';
    $photo = $data["photo"] ?? "./assets/university.png";
    $status = $data["status"] ?? "others";
    $description = $data["description"] ?? "Empty";
    $team_number = $data["team_number"] ?? NULL;
    $contacts = $data["contacts"] ?? '';
    $pack = $data["pack"] ?? '';

    if (empty($nom_institution)) {
        echo json_encode(["error" => "Name are required."]);
        exit;
    }
    if (empty($contacts)) {
        echo json_encode(["error" => "Contacts are required."]);
        exit;
    }
    $status = 'institution'; 
    $prep = $conn->prepare("INSERT INTO Institutions (name, photo, status, description, team_number, contacts, pack) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $prep->bind_param("sssssis", $nom_institution, $photo, $status, $description, $team_number, $contacts, $pack);
    if ($prep->execute()) {
        $newInstitutionId = $prep->insert_id;
        $newInstitution = [
            "institution_id" => $newInstitutionId,
            "name" => $nom_institution,
            "photo" => $photo,
            "status" => $status,
            "description" => $description,
            "team_number" => $team_number,
            "contacts" => $contacts,
            "pack" => $pack,
        ];
        echo json_encode(["message" => "Nouvelle institution créée avec succès!", "institution" => $newInstitution]);
    } else {
        echo json_encode(["error" => "Erreur lors de la création de l'institution : " . $stmt->error]);
    }
    $prep->close();
} else {
    echo "la méthode est ${method}";
}
$conn->close();
?>
