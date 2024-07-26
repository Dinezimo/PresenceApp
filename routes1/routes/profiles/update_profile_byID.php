<?php
// Récupérer l'ID du profil et les nouvelles données à partir de la requête PUT
$profile_id = $_GET['id'];
$nom = $_POST['nom'];
$email = $_POST['email'];
// Ajoutez d'autres champs selon vos besoins

// Requête SQL pour mettre à jour le profil spécifique
$sql = "UPDATE Profiles SET nom='$nom', email='$email' WHERE id=$profile_id";

if ($conn->query($sql) === TRUE) {
    echo "Profil mis à jour avec succès";
} else {
    echo "Erreur : " . $sql . "<br>" . $conn->error;
}

// Fermer la connexion
$conn->close();
?>
