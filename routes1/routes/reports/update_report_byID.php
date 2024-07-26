<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $report_id = $_POST["id"];
    $nouveau_titre = $_POST["nouveau_titre"];
    $nouveau_contenu = $_POST["nouveau_contenu"];

    // Requête pour mettre à jour le rapport
    $sql = "UPDATE Reports SET titre = '$nouveau_titre', contenu = '$nouveau_contenu' WHERE id = $report_id";

    if ($conn->query($sql) === TRUE) {
        echo "Informations du rapport mises à jour avec succès !";
    } else {
        echo "Erreur lors de la mise à jour des informations : " . $conn->error;
    }

    $conn->close();
}
?>
