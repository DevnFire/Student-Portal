<?php
  $db_server="localhost";
  $db_username="root";
  $db_password="";
  $database="college_management";
  $conn = mysqli_connect($db_server, $db_username, $db_password, $database);
  // $conn=mysqli_connect("localhost","root","","college_management");
  if(! $conn){
    echo "Not successful";
  }
  // echo "Connection successful<br>";
?>