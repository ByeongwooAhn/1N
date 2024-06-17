<?php
$db_host = "localhost";
$_db_user = "guest";
$db_password = "guest2024";
$db_name = "one_in";
$con = mysqli_connect($db_host, $_db_user, $db_password, $db_name);

// 입력 값 확인 및 변수 설정
$writer = isset($_POST["writer"]) ? $_POST["writer"] : null;
$write_category = isset($_POST["write_category"]) ? $_POST["write_category"] : null;
$write_title = isset($_POST["write_title"]) ? $_POST["write_title"] : null;
$write_text = isset($_POST["write_text"]) ? $_POST["write_text"] : null;
$write_time = isset($_POST["write_time"]) ? $_POST["write_time"] : null;

// 파일 업로드 처리
$targetDir = "C:\\Users\\am608\\OneDrive\\바탕 화면\\코딩\\SW벤처스타트업 아카데미\\웹\\게시글 사진\\"; // 파일 업로드 디렉토리
$image = null;

if (isset($_FILES['write_image'])) {
    $fileName = $_FILES['write_image']['name'];
    $targetFilePath = $targetDir . $fileName;

    // 파일 이동
    if (move_uploaded_file($_FILES['write_image']['tmp_name'], $targetFilePath)) {
        $image = $targetFilePath; // 파일 경로를 설정
    } else {
        echo "파일 업로드 실패";
        exit;
    }
}

$insert = "INSERT INTO write_infor (writer, write_category, write_title, write_text, write_image, write_time) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = mysqli_prepare($con, $insert);

mysqli_stmt_bind_param($stmt, "ssssss", $writer, $write_category, $write_title, $write_text, $image, $write_time);
$insert_result = mysqli_stmt_execute($stmt);

// 결과 처리
if ($insert_result) {
    echo "삽입 성공!";
} else {
    echo "삽입 실패: " . mysqli_error($con); // 삽입 실패 시 에러 메시지 출력
}

mysqli_stmt_close($stmt);
mysqli_close($con);
?>