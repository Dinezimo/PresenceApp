<?php
// Requête SQL pour récupérer tous les profils
$sql = "SELECT * FROM Profiles";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Afficher les données de chaque ligne
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Nom: " . $row["nom"]. "<br>";
    }
} else {
    echo "0 résultats";
}

// Fermer la connexion
$conn->close();
?>
