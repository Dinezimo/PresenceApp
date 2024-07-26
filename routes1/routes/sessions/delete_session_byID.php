<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $session_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire

    $conn = new mysqli($host, $username, $password, $dbname);

    // Requête pour supprimer la session
    $sql = "DELETE FROM Sessions WHERE id = $session_id";

    if ($conn->query($sql) === TRUE) {
        echo "Session supprimée avec succès !";
    } else {
        echo "Erreur lors de la suppression de la session : " . $conn->error;
    }

    $conn->close();
}
?>
