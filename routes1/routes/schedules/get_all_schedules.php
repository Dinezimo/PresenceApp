<?php
$sql = "SELECT * FROM Schedules";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID : " . $row["id"] . " - Nom : " . $row["nom_emploi_du_temps"] . "<br>";
    }
} else {
    echo "Aucun emploi du temps trouvé.";
}

$conn->close();
?>
