<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $schedule_id = $_POST["id"]; // Récupérez l'ID depuis le formulaire
    $nouveau_nom = $_POST["nouveau_nom"];
    $nouvelle_date = $_POST["nouvelle_date"];

    // Vous pouvez ajouter d'autres champs ici
}
?>

<?php
$sql = "UPDATE Schedules SET nom_emploi_du_temps = '$nouveau_nom', date = '$nouvelle_date' WHERE id = $schedule_id";

if ($conn->query($sql) === TRUE) {
    echo "Informations de l'emploi du temps mises à jour avec succès !";
} else {
    echo "Erreur lors de la mise à jour des informations : " . $conn->error;
}

$conn->close();
?>

<form method="post" action="votre_script.php">
    <input type="hidden" name="id" value="123"> <!-- Remplacez 123 par l'ID de l'emploi du temps à mettre à jour -->
    <input type="text" name="nouveau_nom" placeholder="Nouveau nom de l'emploi du temps" required>
    <input type="date" name="nouvelle_date" placeholder="Nouvelle date" required>
    <!-- Ajoutez d'autres champs ici -->
    <input type="submit" value="Mettre à jour">
</form>
