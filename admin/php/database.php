<?php
    $servername = "172.104.161.98";
    $username = "toolti2022";
    $password = "2022toolti";
    $dbname = "db_jiwapenaku_2205551031";
    
    $connect = new mysqli($servername, $username, $password, $dbname);

    if ($connect->connect_error){
        die("Koneksi gagal : " . $connect->connect_error);
    }

?>