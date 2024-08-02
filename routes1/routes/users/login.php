<?php
require 'vendor/autoload.php';
include 'db_conn.php';
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$key = getenv('SECRET_KEY');
$algo = getenv('ALGO');

if ($_SERVER["REQUEST_METHOD"] == "POST" && $_SERVER["REQUEST_URI"] == "/login") {
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'];
    $password = $data['password'];

    if (empty($email) || empty($password)) {
        http_response_code(400);
        echo json_encode(["message" => "Email and password are required."]);
        exit;
    }

    $check = $con->prepare('SELECT * FROM Users WHERE email = ? LIMIT 1');
    $check->bind_param("s", $email);
    $check->execute();
    $res = $check->get_result();

    if ($res->num_rows === 0) {
        http_response_code(401);
        echo json_encode(["message" => "User not registered."]);
        exit;
    }

    $user = $res->fetch_assoc();
    if (!password_verify($password, $user['password'])) {
        http_response_code(401);
        echo json_encode(["message" => "Invalid credentials."]);
        exit;
    }

    $jwt_input = ['begin' => time(), 'exp' => time() + (3600 * 72), 'id' => $user['user_id']];
    $jwt_code = JWT::encode($jwt_input, $key, $algo);
    echo json_encode(["token" => $jwt_code]);
} else {
    http_response_code(404);
    echo json_encode(["message" => "Route not found 😓 😓 😓"]);
}
?>
