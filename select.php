<?php
    $db_host="localhost";
    $_db_user="guest";
    $db_password="guest2024";
    $db_name="one_in";
    $con=mysqli_connect($db_host, $_db_user, $db_password, $db_name);
    $sql = "SELECT * FROM user_infor";
    $result = mysqli_query($con, $sql);
    
    if(!$con) {
        echo "접속 실패!", "<br>";
        echo "오류 원인: ", mysqli_connect_error();
        exit();
    }
    
    while($row = mysqli_fetch_array($result)) {
        echo "이름: ".$row['NM']. "<br>";
    }

    mysqli_close($con);
?>