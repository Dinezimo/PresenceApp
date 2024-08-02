<?php
include "db_conn.php";
if (isset($_GET['search'])){
    $var = $_GET['search'];
    $safe = $conn->real_escape_string($var);
$sql = "SELECT * FROM Institutions WHERE `name` LIKE "%" .$safe . "%"";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row["nom_institution"] . "<br>";
    }
} else {
    echo "Aucun résultat trouvé.";
}
}

$conn->close();
?>
