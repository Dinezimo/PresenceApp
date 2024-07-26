<?php
$group_id = $_GET['id']; // Récupérez l'ID depuis l'URL (par exemple, http://votre-site.com/groups?id=123)

$sql = "SELECT * FROM Groups WHERE id = $group_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Affichez les détails du groupe (par exemple, nom, description, etc.)
    echo "Nom : " . $row["nom_groupe"] . "<br>";
    echo "Description : " . $row["description"] . "<br>";
    // Ajoutez d'autres champs selon vos besoins
} else {
    echo "Aucun résultat trouvé pour cet ID.";
}

$conn->close();
?>
