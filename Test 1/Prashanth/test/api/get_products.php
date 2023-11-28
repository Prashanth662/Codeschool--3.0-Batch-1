<?php

require("./utils/connection.php");

if($_SERVER["REQUEST_METHOD"] != "GET") {
    sendResponse(false, "Invalid request method");
}
$pdo = connect();
$stmt = $pdo->query('SELECT image, name, category, sku, variant, price, status FROM products');
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($products);