<?php
$sql = "SELECT * FROM Users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "success to get users";
} else {
    echo "Aucun utilisateur trouvé.";
}

$conn->close();
?>
