<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titre = $_POST["titre"];
    $message = $_POST["message"];

    // Requête pour insérer une nouvelle notification
    $sql = "INSERT INTO Notifications (titre, message) VALUES ('$titre', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Nouvelle notification créée avec succès !";
    } else {
        echo "Erreur lors de la création de la notification : " . $conn->error;
    }

    $conn->close();
}
?>
