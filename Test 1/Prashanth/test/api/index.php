<?php

require("./utils/connection.php");

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    sendResponse(false, "Invalid request method");
}

if (!isset($_POST["user_name"])) {
    sendResponse(false, "Name is required");
}
if (!isset($_POST["email"])) {
    sendResponse(false, "Email is required");
}
if (!isset($_POST["password"])) {
    sendResponse(false, "Password is required");
}

$user_name = $_POST["user_name"];
$email = $_POST["email"];
$password = md5($_POST["password"]);

if (strlen($user_name) < 3 || strlen($email) > 40) {
    sendResponse(false, "Name must be at least 3 characters and at most 25 characters");
}

$pdo = connect();

$query = "INSERT INTO users (user_name, email, password) VALUES (:user_name, :email, :password)";

$stmt = $pdo->prepare($query);
$stmt->bindParam("user_name", $user_name, PDO::PARAM_STR);
$stmt->bindParam("email", $email, PDO::PARAM_STR);
$stmt->bindParam("password", $password, PDO::PARAM_STR);

$stmt->execute();
if ($stmt->rowCount() > 0) {
    sendResponse(true, "Registered Successfully");
}

sendResponse(false, "User registration failed");

