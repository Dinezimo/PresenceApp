<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $notification_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire
    $nouveau_titre = $_POST["titre"];
    $nouveau_message = $_POST["message"];

    // Requête pour mettre à jour la notification
    $sql = "UPDATE Notifications SET titre = '$nouveau_titre', message = '$nouveau_message' WHERE id = $notification_id";

    if ($conn->query($sql) === TRUE) {
        echo "Notification mise à jour avec succès !";
    } else {
        echo "Erreur lors de la mise à jour de la notification : " . $conn->error;
    }

    $conn->close();
}
?>
