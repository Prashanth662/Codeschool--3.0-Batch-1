<?php
require("./utils/connection.php");
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    sendResponse(false, "Invalid request method");
}

if (!isset($_POST["image"])) {
    sendResponse(false, "image is required");
}
if (!isset($_POST["name"])) {
    sendResponse(false, "Product Name is required");
}
if (!isset($_POST["category"])) {
    sendResponse(false, "Product Category is required");
}
if (!isset($_POST["sku"])) {
    sendResponse(false, "SKU is required");
}
if (!isset($_POST["variant"])) {
    sendResponse(false, "Variant is required");
}
if (!isset($_POST["price"])) {
    sendResponse(false, "Product price is required");
}
if (!isset($_POST["status"])) {
    sendResponse(false, "Product status is required");
}

$image = $_POST["image"];
$name = $_POST["name"];
$category = $_POST["category"];
$sku = $_POST["sku"];
$variant = $_POST["variant"];
$price = $_POST["price"];
$status = $_POST["status"];


$pdo = connect();

$query = "INSERT INTO products (image, name, category, sku, variant, price, status) VALUES (:image, :name, :category, :sku, :variant, :price, :status)";

$stmt = $pdo->prepare($query);
$stmt->bindParam("image", $image, PDO::PARAM_STR);
$stmt->bindParam("name", $name, PDO::PARAM_STR);
$stmt->bindParam("category", $category, PDO::PARAM_STR);
$stmt->bindParam("sku", $sku, PDO::PARAM_STR);
$stmt->bindParam("variant", $variant, PDO::PARAM_STR);
$stmt->bindParam("price", $price, PDO::PARAM_STR);
$stmt->bindParam("status", $status, PDO::PARAM_STR);

$stmt->execute();
if ($stmt->rowCount() > 0) {
    sendResponse(true, "Registered Successfully");
}

sendResponse(false, "User registration failed");

