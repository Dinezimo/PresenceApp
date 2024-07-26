<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $report_id = $_GET["id"]; // Récupérez l'ID depuis l'URL

    // Requête pour récupérer les détails du rapport
    $sql = "SELECT * FROM Reports WHERE id = $report_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Affichage des résultats
        while($row = $result->fetch_assoc()) {
            echo "ID: " . $row["id"]. " - Titre: " . $row["titre"]. " - Contenu: " . $row["contenu"]. "<br>";
        }
    } else {
        echo "0 résultats";
    }

    $conn->close();
}
?>
