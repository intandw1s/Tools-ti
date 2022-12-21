<?php
session_start();

$result = array();
require "database.php";

$id_str = $_POST['id'];

$select = mysqli_query($connect, "DELETE FROM story WHERE id_cerita = '$id_str'");

echo json_encode($result);
