<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom_utilisateur = $_POST["nom_utilisateur"];
    $email = $_POST["email"];
    $mot_de_passe = password_hash($_POST["mot_de_passe"], PASSWORD_DEFAULT); // Hachage du mot de passe pour plus de sécurité

    // Vous pouvez ajouter d'autres champs ici
}
?>

<?php
$sql = "INSERT INTO Users (nom_utilisateur, email, mot_de_passe) VALUES ('$nom_utilisateur', '$email', '$mot_de_passe')";

if ($conn->query($sql) === TRUE) {
    echo "Nouvel utilisateur créé avec succès !";
} else {
    echo "Erreur lors de la création de l'utilisateur : " . $conn->error;
}

$conn->close();
?>
