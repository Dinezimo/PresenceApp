<?php
$id_to_delete = $_GET['id'];

$sql = "DELETE FROM Institutions WHERE id = $id_to_delete";

if ($conn->query($sql) === TRUE) {
    echo "Institution avec l'ID $id_to_delete supprimée avec succès !";
} else {
    echo "Erreur lors de la suppression de l'institution : " . $conn->error;
}

$conn->close();
?>
