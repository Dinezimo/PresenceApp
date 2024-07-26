<?php
// Récupérer l'ID du profil à partir de l'URL
$profile_id = $_GET['id'];

// Requête SQL pour récupérer les détails du profil spécifique
$sql = "SELECT * FROM Profiles WHERE id = $profile_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Afficher les détails du profil (par exemple, nom, email, etc.)
    echo "Nom : " . $row["nom"] . "<br>";
    echo "Email : " . $row["email"] . "<br>";
    // Ajoutez d'autres champs selon vos besoins
} else {
    echo "Aucun résultat trouvé pour cet ID.";
}

$conn->close();
?>
