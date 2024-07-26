<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $report_id = $_POST["id"];

    // Requête pour supprimer le rapport
    $sql = "DELETE FROM Profiles WHERE id = $report_id";

    if ($conn->query($sql) === TRUE) {
        echo "Profile supprimé avec succès !";
    } else {
        echo "Erreur lors de la suppression du profile : " . $conn->error;
    }

    $conn->close();
}
?>
