<?php
$id_to_delete = $_GET['id'];

$sql = "DELETE FROM Users WHERE id = $id_to_delete";

if ($conn->query($sql) === TRUE) {
    echo "Utilisateur avec l'ID $id_to_delete supprimé avec succès !";
} else {
    echo "Erreur lors de la suppression de l'utilisateur : " . $conn->error;
}

$conn->close();
?>
