<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $report_id = $_POST["id"];

    // Requête pour supprimer le rapport
    $sql = "DELETE FROM Reports WHERE id = $report_id";

    if ($conn->query($sql) === TRUE) {
        echo "Rapport supprimé avec succès !";
    } else {
        echo "Erreur lors de la suppression du rapport : " . $conn->error;
    }

    $conn->close();
}
?>
