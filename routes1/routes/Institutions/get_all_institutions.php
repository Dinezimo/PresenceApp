<?php
$sql = "SELECT * FROM Institutions";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row["nom_institution"] . "<br>";
    }
} else {
    echo "Aucun résultat trouvé.";
}

$conn->close();
?>
