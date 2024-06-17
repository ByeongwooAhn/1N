<?php
$db_host = "localhost";
$_db_user = "guest";
$db_password = "guest2024";
$db_name = "one_in";
$con = mysqli_connect($db_host, $_db_user, $db_password, $db_name);

$image = $_FILES['image'];
$fileName = $_FILES['image']['name'];
$targetDir = "C:\\Users\\am608\\OneDrive\\바탕 화면\\코딩\\SW벤처스타트업 아카데미\\웹\\게시글 사진\\"; // 파일 업로드 디렉토리
$write_image = null;
$targetFilePath = $targetDir . $fileName;
$test1 = isset($_FILES['image']);
$test2 = move_uploaded_file($_FILES['image']['tmp_name'], $targetFilePath);

var_dump($image);
echo "<br>";
echo "<br>";
var_dump($fileName);
echo "<br>";
echo "<br>";
var_dump($targetDir);
echo "<br>";
echo "<br>";
var_dump($write_image);
echo "<br>";
echo "<br>";
var_dump($targetFilePath);
echo "<br>";
echo "<br>";
var_dump($test1);
echo "<br>";
echo "<br>";
var_dump($test2);

$image = $targetFilePath;

echo "<br>";
echo "<br>";
var_dump($image);
?>