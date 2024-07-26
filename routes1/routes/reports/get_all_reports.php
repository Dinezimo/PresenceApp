<?php
// Requête pour récupérer tous les rapports
$sql = "SELECT * FROM Reports";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Affichage des résultats
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Titre: " . $row["titre"]. " - Contenu: " . $row["contenu"]. "<br>";
    }
} else {
    echo "0 résultats";
}

$conn->close();
?>
