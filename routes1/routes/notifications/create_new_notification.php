<?php
require 'vendor/autoload.php';
include 'db_conn.php';

function sendNotification($db, $email, $name, $input) {
    if (empty($email) || empty($name) || empty($input)) {
        echo json_encode(["error" => "All fields are required."]);
        return;
    }
    
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $name = htmlspecialchars($name);
    $input = htmlspecialchars($input);
    $msg = "$name would like to join your institution";

    $prepa1 = $db->prepare("SELECT institution_id FROM Institutions WHERE name = ?");
    $prepa1->bind_param("s", $input);
    $prepa1->execute();
    $prepa1->bind_result($institution_id);
    $prepa1->fetch();
    $prepa1->close();

    if (!$institution_id) {
        echo json_encode(["error" => "Institution not found."]);
        return;
    }

    $prepa2 = $db->prepare("SELECT user_id FROM Users WHERE institution_id = ? AND role = 'admin'");
    $prepa2->bind_param("i", $institution_id);
    $prepa2->execute();
    $prepa2->bind_result($admin_id);
    $prepa2->fetch();
    $prepa2->close();

    if (!$admin_id) {
        echo json_encode(["error" => "Admin not found for the institution."]);
        return;
    }

    $checkQuery = $db->prepare("SELECT COUNT(*) FROM Notifications WHERE user_id = ? AND message = ?");
    $checkQuery->bind_param("is", $admin_id, $msg);
    $checkQuery->execute();
    $checkQuery->bind_result($count);
    $checkQuery->fetch();
    $checkQuery->close();

if ($count > 0) {
    echo json_encode(["error" => "Duplicate notification."]);
    return;
}
    $prepa3 = $db->prepare("INSERT INTO Notifications (user_id, message, created_at) VALUES (?, ?, NOW())");
    $prepa3->bind_param("is", $admin_id, $msg);
    if ($prepa3->execute()) {
        echo json_encode(["success" => "Message sent successfully."]);
    } else {
        echo json_encode(["error" => "A problem has occurred."]);
    }
    $prepa3->close();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData, true);

    if (json_last_error() === JSON_ERROR_NONE) {
        $email = $data['email'] ?? '';
        $name = $data['name'] ?? '';
        $input = $data['input'] ?? '';

        sendNotification($conn, $email, $name, $input);
    } else {
        echo "Invalid JSON data.";
    }
}
?>
