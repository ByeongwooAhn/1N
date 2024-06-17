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

// 게시글 목록을 가져오는 쿼리 작성 (가짜 데이터 사용 예시)
$query = "SELECT * FROM write_infor";

// 쿼리 실행
$result = mysqli_query($con, $query);

// 결과가 있을 경우 배열로 변환
$posts = array();
while ($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;
}

// 결과를 JSON 형식으로 출력
header('Content-Type: application/json');
echo json_encode($posts);

// MySQL 연결 종료
mysqli_close($con);
?>
