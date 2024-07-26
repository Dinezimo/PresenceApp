<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $notification_id = $_GET["id"]; // Récupérez l'ID depuis l'URL

    // Requête pour récupérer les détails de la notification
    $sql = "SELECT * FROM Notifications WHERE id = $notification_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Affichage des résultats
        while($row = $result->fetch_assoc()) {
            echo "ID: " . $row["id"]. " - Titre: " . $row["titre"]. " - Message: " . $row["message"]. "<br>";
        }
    } else {
        echo "0 résultats";
    }

    $conn->close();
}
?>
