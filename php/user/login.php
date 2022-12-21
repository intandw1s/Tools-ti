<?php
session_start();
require "../database.php";

$result = array();

$username = htmlentities($_POST['user']);
$password = $_POST['pass'];

$select = mysqli_query($connect, "SELECT*FROM pengguna WHERE username = '$username' AND password = '$password'");
$rowsum = mysqli_num_rows($select);

if ($rowsum == 1) {
  $result['status'] = 1;
  $_SESSION['login'] = true;

  while ($row = mysqli_fetch_assoc($select)) {
    $iduser = $row['id_pengguna'];
  }

  $_SESSION['iduser'] = $iduser;
} else {
  $result['status'] = 0;
}

echo json_encode($result);
