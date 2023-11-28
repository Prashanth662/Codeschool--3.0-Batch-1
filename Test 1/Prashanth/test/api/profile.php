<?php
require("./index.php");

if($_SERVER["REQUEST_METHOD"] != "GET") {
    sendResponse(false, "Invalid request method");
}
$pdo = connect();
$stmt = $pdo->query('SELECT user_name, email FROM users');
$profile = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($profile);