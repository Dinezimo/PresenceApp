<?php
// Requête pour récupérer toutes les notifications
$sql = "SELECT * FROM Notifications";
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
?>
