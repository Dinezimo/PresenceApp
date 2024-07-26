<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titre = $_POST["titre"];
    $contenu = $_POST["contenu"];

    // Requête pour insérer un nouveau rapport
    $sql = "INSERT INTO Reports (titre, contenu) VALUES ('$titre', '$contenu')";

    if ($conn->query($sql) === TRUE) {
        echo "Nouveau rapport créé avec succès !";
    } else {
        echo "Erreur lors de la création du rapport : " . $conn->error;
    }

    $conn->close();
}
?>
