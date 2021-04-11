<?php
header("Content-Type: text/html;charset=UTF-8");
$conn = mysql_connect("127.0.0.1","root","FLvguSbVkG6N");
$data_stream = "'".$_GET['Id']."','".$_GET['Password']."','".$_GET['Name']."','".$_GET['PhoneNum']."','".$_GET['Email']."'";
$query = "insert into user(`Id`, `Password`, `Name`, `PhoneNum`, `Email`) values (".$data_stream.")";
$result = mysql_query($conn, $query);

if($result)
    echo "1";
else
    echo "-1";

mysql_close($conn);
?>
