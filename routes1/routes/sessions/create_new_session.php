<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $date = $_POST["date"];
    
    // Requête pour insérer une nouvelle session
    $sql = "INSERT INTO Sessions (nom, date) VALUES ('$nom', '$date')";

    if ($conn->query($sql) === TRUE) {
        echo "Nouvelle session créée avec succès !";
    } else {
        echo "Erreur lors de la création de la session : " . $conn->error;
    }

    $conn->close();
}
?>
