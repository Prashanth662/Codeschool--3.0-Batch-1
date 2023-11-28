<?php

require("./utils/connection.php");

if($_SERVER["REQUEST_METHOD"] != "GET") {
    sendResponse(false, "Invalid request method");
}
$pdo = connect();
$stmt = $pdo->query('SELECT id, category FROM category');
$filter = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($filter);