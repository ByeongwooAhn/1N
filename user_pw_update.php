<?php
$db_host = "localhost";
$_db_user = "guest";
$db_password = "guest2024";
$db_name = "one_in";
$con = mysqli_connect($db_host, $_db_user, $db_password, $db_name);

// POST 데이터 받기
$data = json_decode(file_get_contents('php://input'), true);
$userid = isset($data["user_id"]) ? $data["user_id"] : null;
$changepw = isset($data["change_pw"]) ? $data["change_pw"] : null;

// 데이터 확인 및 처리
if ($userid !== null && $changepw !== null)
{
    $stmt = mysqli_prepare($con, "UPDATE user_infor SET PW = ? WHERE ID = ?");
    mysqli_stmt_bind_param($stmt, "ss", $changepw, $userid);
    mysqli_stmt_execute($stmt);

    $select_result = mysqli_stmt_get_result($stmt);
}

mysqli_close($con);
?>
