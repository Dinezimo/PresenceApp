<?php
$sql = "SELECT * FROM Groups";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID : " . $row["id"] . " - Nom : " . $row["nom_groupe"] . "<br>";
    }
} else {
    echo "Aucun groupe trouvé.";
}

$conn->close();
?>
