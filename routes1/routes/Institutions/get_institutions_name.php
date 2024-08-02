<?php
include "db_conn.php";

header('Content-Type: application/json');
if (isset($_GET['search'])) {
    $searchTerm = $_GET['search'];
    $safeSearchTerm = $conn->real_escape_string($searchTerm);
    $stmt = $conn->prepare("SELECT * FROM Institutions WHERE name LIKE ?");
    $searchTermWithWildcards = "%{$safeSearchTerm}%";
    $stmt->bind_param("s", $searchTermWithWildcards);
    $stmt->execute();
    $result = $stmt->get_result();
    $institutions = array();
    while ($row = $result->fetch_assoc()) {
        $institutions[] = $row;
    }
    echo json_encode($institutions);

    $stmt->close();
} else {
    echo json_encode([]);
}

$conn->close();
?>
