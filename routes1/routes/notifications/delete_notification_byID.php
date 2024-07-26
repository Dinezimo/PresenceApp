<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $notification_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire

    // Requête pour supprimer la notification
    $sql = "DELETE FROM Notifications WHERE id = $notification_id";

    if ($conn->query($sql) === TRUE) {
        echo "Notification supprimée avec succès !";
    } else {
        echo "Erreur lors de la suppression de la notification : " . $conn->error;
    }

    $conn->close();
}
?>
