<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $institution_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire
    $nouveau_nom = $_POST["nouveau_nom"];
    $nouvelle_adresse = $_POST["nouvelle_adresse"];
}

$sql = "UPDATE Institutions SET nom_institution = '$nouveau_nom', adresse = '$nouvelle_adresse' WHERE id = $institution_id";

if ($conn->query($sql) === TRUE) {
    echo "Informations de l'institution mises à jour avec succès !";
} else {
    echo "Erreur lors de la mise à jour des informations : " . $conn->error;
}

$conn->close();
?>
