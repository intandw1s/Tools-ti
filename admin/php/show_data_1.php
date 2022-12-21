<?php


require "database.php";
$result = array();
$iddnt = $_POST['dnt'];

$select = mysqli_query($connect, "SELECT*FROM story WHERE id_cerita=$iddnt ");
$rowsum = mysqli_num_rows($select);

if ($rowsum > 0) {
  while ($row = mysqli_fetch_assoc($select)) {

    $id_str = $row['id_cerita'];
    $ttl_str = $row['judul'];
    $str = $row['cerita'];
    $pic = $row['gambar_cerita'];

    $result[] = array(
      "id" => $id_str,
      "ttl" => $ttl_str,
      "str" => $str,
      "img" => $pic
    );
  }
}
echo json_encode($result);
