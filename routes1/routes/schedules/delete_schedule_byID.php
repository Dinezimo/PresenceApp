<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $schedule_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire

    // Requête pour supprimer l'emploi du temps
    $sql = "DELETE FROM Schedules WHERE id = $schedule_id";

    if ($conn->query($sql) === TRUE) {
        echo "Emploi du temps supprimé avec succès !";
    } else {
        echo "Erreur lors de la suppression de l'emploi du temps : " . $conn->error;
    }

    $conn->close();
}
?>
