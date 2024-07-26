<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $session_id = $_GET["id"]; // Récupérez l'ID depuis l'URL

// Requête pour récupérer les détails de la session
    $sql = "SELECT * FROM Sessions WHERE id = $session_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Affichage des résultats
        while($row = $result->fetch_assoc()) {
            echo "ID: " . $row["id"]. " - Nom: " . $row["nom"]. " - Date: " . $row["date"]. "<br>";
        }
    } else {
        echo "0 résultats";
    }

    $conn->close();
}
?>
