<?php
// Récupérer les données du formulaire POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$nom = $_POST['nom'];
$email = $_POST['email'];
// Ajoutez d'autres champs selon vos besoins

// Requête SQL pour insérer un nouveau profil
$sql = "INSERT INTO Profiles (nom, email) VALUES ('$nom', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Nouveau profil créé avec succès";
} else {
    echo "Erreur : " . $sql . "<br>" . $conn->error;
}

// Fermer la connexion
$conn->close();
}
?>
