<?php
// 데이터베이스 접속 정보
$db_host = "localhost";
$db_user = "guest";
$db_password = "guest2024";
$db_name = "one_in";

// MySQL 데이터베이스에 접속
$con = mysqli_connect($db_host, $db_user, $db_password, $db_name);

// UTF-8 인코딩 설정
mysqli_set_charset($con, "utf8");

// 게시글 번호 가져오기
$write_no = $_GET['write_no'];

// 게시글 조회 쿼리 작성
$query = "SELECT * FROM write_infor WHERE write_no = $write_no";

// 쿼리 실행
$result = mysqli_query($con, $query);

if (!$result) {
    die('쿼리 오류: ' . mysqli_error($con));
}

// 결과가 있을 경우 배열로 변환
$post = mysqli_fetch_assoc($result);

// JSON 형식으로 출력
header('Content-Type: application/json');
echo json_encode($post);

// MySQL 연결 종료
mysqli_close($con);
?>
