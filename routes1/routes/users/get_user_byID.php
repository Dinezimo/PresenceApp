<?php
$user_id = $_GET['id']; // Récupérez l'ID depuis l'URL

$sql = "SELECT * FROM Users WHERE id = $user_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Affichez les détails de l'utilisateur (par exemple, nom, email, etc.)
    echo "Nom : " . $row["nom_utilisateur"] . "<br>";
    echo "Email : " . $row["email"] . "<br>";
    // Ajoutez d'autres champs selon vos besoins
} else {
    echo "Aucun résultat trouvé pour cet ID.";
}

$conn->close();
?>
