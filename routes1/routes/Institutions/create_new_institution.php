<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom_institution = $_POST["nom_institution"];
    $adresse = $_POST["adresse"];
}
$sql = "INSERT INTO Institutions (nom_institution, adresse) VALUES ('$nom_institution', '$adresse')";

if ($conn->query($sql) === TRUE) {
    echo "Nouvelle institution créée avec succès !";
} else {
    echo "Erreur lors de la création de l'institution : " . $conn->error;
}

$conn->close();
?>
