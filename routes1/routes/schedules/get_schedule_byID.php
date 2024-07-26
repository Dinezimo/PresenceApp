<?php
$schedule_id = $_GET['id']; // Récupérez l'ID depuis l'URL

$sql = "SELECT * FROM Schedules WHERE id = $schedule_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Affichez les détails de l'emploi du temps (par exemple, nom, date, etc.)
    echo "Nom : " . $row["nom_emploi_du_temps"] . "<br>";
    echo "Date : " . $row["date"] . "<br>";
    // Ajoutez d'autres champs selon vos besoins
} else {
    echo "Aucun résultat trouvé pour cet ID.";
}

$conn->close();
?>
