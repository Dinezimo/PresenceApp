<?php
$user_id = $_GET['id'];

$sql = "SELECT * FROM Users WHERE id = $user_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo "Nom : " . $row["nom_utilisateur"] . "<br>";
    echo "Email : " . $row["email"] . "<br>";
} else {
    echo "Aucun résultat trouvé pour cet ID.";
}

$conn->close();
?>
