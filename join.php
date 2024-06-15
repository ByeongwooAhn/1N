<?php
$db_host = "localhost";
$_db_user = "guest";
$db_password = "guest2024";
$db_name = "one_in";
$con = mysqli_connect($db_host, $_db_user, $db_password, $db_name);

// 입력 값 확인 및 변수 설정
$name = isset($_POST["NAME"]) ? $_POST["NAME"] : null;
$id = isset($_POST["ID"]) ? $_POST["ID"] : null;
$pw = isset($_POST["PASSWORD"]) ? $_POST["PASSWORD"] : null;
$phone = isset($_POST["PHONE"]) ? $_POST["PHONE"] : null;
$birth = isset($_POST["BIRTH"]) ? $_POST["BIRTH"] : null;

// 모든 입력 값이 존재할 때만 쿼리 실행
if ($name !== null && $id !== null && $pw !== null && $phone !== null && $birth !== null)
{
    // 매개변수화된 쿼리 준비
    $insert = "INSERT INTO user_infor (NM, ID, PW, PHONE, BIRTH) VALUES (?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($con, $insert);

    mysqli_stmt_bind_param($stmt, "sssss", $name, $id, $pw, $phone, $birth);
    $insert_result = mysqli_stmt_execute($stmt);

    // 결과 처리
    if ($insert_result)
    {
        echo "삽입 성공!";
    }
    else
    {
        echo "삽입 실패: " . mysqli_error($con); // 삽입 실패 시 에러 메시지 출력
    }

    mysqli_stmt_close($stmt);
}
else
{
    echo "입력 값이 충분하지 않습니다."; // 입력 값이 없는 경우 예외 처리
}

mysqli_close($con);
?>
