<?php

require("./utils/connection.php");

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    sendResponse(false, "Invalid request method");
}

if (!isset($_POST["name"])) {
    sendResponse(false, "Name is required");
}
if (!isset($_POST["email"])) {
    sendResponse(false, "Email is required");
}
if (!isset($_POST["password"])) {
    sendResponse(false, "Password is required");
}
if (!isset($_POST["userRole"])) {
    sendResponse(false, "input field is required");
}

$name = $_POST["name"];
$email = $_POST["email"];
$password = md5($_POST["password"]);
$userRole = $_POST["userRole"];

if (strlen($name) < 3 || strlen($email) > 40) {
    sendResponse(false, "Name must be at least 3 characters and at most 25 characters");
}
if(empty($password)) {
    sendResponse(false, "Password can not be empty");
    exit;
}
$pdo = connect();

    $query = "INSERT INTO users (name, email, password, userRole) VALUES (:name, :email, :password, :userRole)";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam("name", $name, PDO::PARAM_STR);
    $stmt->bindParam("email", $email, PDO::PARAM_STR);
    $stmt->bindParam("password", $password, PDO::PARAM_STR);
    $stmt->bindParam("userRole", $userRole, PDO::PARAM_STR);

    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        sendResponse(true, "Registered Successfully");
    }

    sendResponse(false, "User registration failed");


