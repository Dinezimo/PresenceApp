<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom_groupe = $_POST["nom_groupe"];
    $description = $_POST["description"];
}

$sql = "INSERT INTO Groups (nom_groupe, description) VALUES ('$nom_groupe', '$description')";

if ($conn->query($sql) === TRUE) {
    echo "Nouveau groupe créé avec succès !";
} else {
    echo "Erreur lors de la création du groupe : " . $conn->error;
}

$conn->close();
?>
