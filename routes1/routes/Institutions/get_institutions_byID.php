<?php
$institution_id = $_GET['id']; // Récupérez l'ID

$sql = "SELECT * FROM Institutions WHERE id = $institution_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo "Nom : " . $row["nom_institution"] . "<br>";
    echo "Adresse : " . $row["adresse"] . "<br>";
} else {
    echo "Aucun résultat trouvé pour cet ID.";
}

$conn->close();
?>
