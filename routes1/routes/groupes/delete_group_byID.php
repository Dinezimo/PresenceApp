<?php
$id_to_delete = $_GET['id']; // Récupérez l'ID depuis l'URL

$sql = "DELETE FROM Groups WHERE id = $id_to_delete";

if ($conn->query($sql) === TRUE) {
    echo "Groupe avec l'ID $id_to_delete supprimé avec succès !";
} else {
    echo "Erreur lors de la suppression du groupe : " . $conn->error;
}

$conn->close();
?>
