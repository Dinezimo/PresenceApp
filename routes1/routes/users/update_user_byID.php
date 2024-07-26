<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire
    $nouveau_nom = $_POST["nouveau_nom"];
    $nouvel_email = $_POST["nouvel_email"];

    // Vous pouvez ajouter d'autres champs ici
}
?>

<?php
$sql = "UPDATE Users SET nom_utilisateur = '$nouveau_nom', email = '$nouvel_email' WHERE id = $user_id";

if ($conn->query($sql) === TRUE) {
    echo "Informations de l'utilisateur mises à jour avec succès !";
} else {
    echo "Erreur lors de la mise à jour des informations : " . $conn->error;
}

$conn->close();
?>
