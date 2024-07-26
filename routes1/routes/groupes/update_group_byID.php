<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $group_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire
    $nouveau_nom = $_POST["nouveau_nom"];
    $nouvelle_description = $_POST["nouvelle_description"];
    // On pouvez ajouter d'autres champs ici les boss
}

$sql = "UPDATE Groups SET nom_groupe = '$nouveau_nom', description = '$nouvelle_description' WHERE id = $group_id";

if ($conn->query($sql) === TRUE) {
    echo "Informations du groupe mises à jour avec succès !";
} else {
    echo "Erreur lors de la mise à jour des informations : " . $conn->error;
}

$conn->close();
?>
