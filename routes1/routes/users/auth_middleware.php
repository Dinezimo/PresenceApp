function authenticateJWT() {
    $headers = apache_request_headers();
    if (isset($headers['Authorization'])) {
        $matches = [];
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            $jwt = $matches[1];
            try {
                $decoded = JWT::decode($jwt, SECRET_KEY, [ALGORITHM]);
                return $decoded; // Return the decoded payload
            } catch (ExpiredException $e) {
                http_response_code(401);
                echo json_encode(["message" => "Token has expired."]);
                exit;
            } catch (Exception $e) {
                http_response_code(401);
                echo json_encode(["message" => "Invalid token."]);
                exit;
            }
        }
    }
    http_response_code(401);
    echo json_encode(["message" => "Authorization header not found."]);
    exit;
}