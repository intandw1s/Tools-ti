<?php
session_start();
require "database.php";

$result = array();

$username = htmlentities($_POST['user']);
$password = $_POST['pass'];

$select = mysqli_query($connect, "SELECT*FROM admin WHERE username = '$username' AND password = '$password'");
$rowsum = mysqli_num_rows($select);

if ($rowsum == 1) {
  $result['status'] = 1;
  $_SESSION['loginadmin'] = true;

  while ($row = mysqli_fetch_assoc($select)) {
    $idadmin = $row['id_admin'];
  }

  $_SESSION['idadmin'] = $idadmin;
} else {
  $result['status'] = 0;
}

echo json_encode($result);
