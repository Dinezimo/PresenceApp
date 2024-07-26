<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $session_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire
    $nouveau_nom = $_POST["nom"];
    $nouvelle_date = $_POST["date"];

    // Requête pour mettre à jour la session
    $sql = "UPDATE Sessions SET nom = '$nouveau_nom', date = '$nouvelle_date' WHERE id = $session_id";

    if ($conn->query($sql) === TRUE) {
        echo "Session mise à jour avec succès !";
    } else {
        echo "Erreur lors de la mise à jour de la session : " . $conn->error;
    }

    $conn->close();
}
?>
