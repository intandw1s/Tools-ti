<?php

session_start();
require "database.php";
$result = array();

$ttl_str = $_POST['title'];
$str = $_POST['story'];

$target_directory = "../assets/images/list/";
$target_file = $target_directory . basename($_FILES["file"]["name"]);
$file_name = basename($_FILES["file"]["name"]);
//$newfilename = $target_directory . $fp;


if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {

  $select = mysqli_query($connect, "INSERT INTO story(judul,cerita,gambar_cerita) VALUES ('$ttl_str','$str','$file_name');");
  $result['status'] = 1;
}
echo json_encode($result);
