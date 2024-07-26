<?php
$sql = "SELECT * FROM Users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID : " . $row["id"] . " - Nom : " . $row["nom_utilisateur"] . "<br>";
    }
} else {
    echo "Aucun utilisateur trouvé.";
}

$conn->close();
?>
