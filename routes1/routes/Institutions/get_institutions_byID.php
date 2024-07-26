<?php
$institution_id = $_GET['id']; // Récupérez l'ID

$sql = "SELECT * FROM Institutions WHERE id = $institution_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Affichez les détails de l'institution (par exemple, nom, adresse, etc.)
    echo "Nom : " . $row["nom_institution"] . "<br>";
    echo "Adresse : " . $row["adresse"] . "<br>";
    // Ajoutez d'autres champs selon vos besoins
} else {
    echo "Aucun résultat trouvé pour cet ID.";
}

$conn->close();
?>
