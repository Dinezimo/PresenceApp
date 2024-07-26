<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom_emploi_du_temps = $_POST["nom_emploi_du_temps"];
    $date = $_POST["date"];

    // Vous pouvez ajouter d'autres champs ici
}
?>

<?php
$sql = "INSERT INTO Schedules (nom_emploi_du_temps, date) VALUES ('$nom_emploi_du_temps', '$date')";

if ($conn->query($sql) === TRUE) {
    echo "Nouvel emploi du temps créé avec succès !";
} else {
    echo "Erreur lors de la création de l'emploi du temps : " . $conn->error;
}

$conn->close();
?>
