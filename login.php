<?php
$db_host = "localhost";
$_db_user = "guest";
$db_password = "guest2024";
$db_name = "one_in";
$con = mysqli_connect($db_host, $_db_user, $db_password, $db_name);

// POST 데이터 받기
$data = json_decode(file_get_contents('php://input'), true);
$loginid = isset($data["login_id"]) ? $data["login_id"] : null;
$loginpassword = isset($data["login_password"]) ? $data["login_password"] : null;

// 데이터 확인 및 처리
if ($loginid !== null && $loginpassword !== null)
{
    $stmt = mysqli_prepare($con, "SELECT * FROM user_infor WHERE ID = ? AND PW = ?");
    mysqli_stmt_bind_param($stmt, "ss", $loginid, $loginpassword);
    mysqli_stmt_execute($stmt);

    $select_result = mysqli_stmt_get_result($stmt);

    if ($select_result)
    {
        if (mysqli_num_rows($select_result) != 0)
        {
            $logincheck = 1;

            $row = mysqli_fetch_array($select_result);

            $nm = $row['NM'];
            $id = $row['ID'];
            $pw = $row['PW'];
            $phone = $row['PHONE'];
            $birth = $row['BIRTH'];

            echo json_encode(array("logincheck" => $logincheck, "nm" => $nm, "id" => $id, "pw" => $pw, "phone" => $phone, "birth" => $birth));
        }
        else
        {
            $logincheck = 0;
            $error = "회원 정보가 없습니다. 아이디 또는 비밀번호를 확인해주세요.";

            echo json_encode(array("logincheck" => $logincheck, "error" => $error));
        }
    }
    else
    {
        echo json_encode(array("error" => "접속 실패"));
    }

    mysqli_stmt_close($stmt);
}
else
{
    echo json_encode(array("error" => "입력값이 없음"));
}

mysqli_close($con);
?>
