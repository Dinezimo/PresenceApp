<?php
// Requête pour récupérer toutes les sessions
$sql = "SELECT * FROM Sessions";
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
?>
