<?php

session_start();
require "database.php";
$result = array();

$idstr = $_POST['id'];
$ttl_str = $_POST['title'];
$str = $_POST['story'];
//$fp = $_POST['fp'];

$target_directory = "../assets/images/list/";
$target_file = $target_directory . basename($_FILES["file"]["name"]);
$file_name = basename($_FILES["file"]["name"]);
//$newfilename = $target_directory . $fp;


if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
  $select = mysqli_query($connect, "UPDATE story SET judul = '$ttl_str', cerita = '$str', gambar_cerita = '$file_name' WHERE id_cerita = $idstr;");
  $result['status'] = 1;
}
echo json_encode($result);
