<?php
    $db_host="localhost";
    $_db_user="guest";
    $db_password="guest2024";
    $db_name="one_in";
    $con=mysqli_connect($db_host, $_db_user, $db_password, $db_name);

    $name = $_POST["NAME"];
    $id = $_POST["ID"];
    $pw = $_POST["PASSWORD"];
    $phone = $_POST["PHONE"];
    $birth = $_POST["BIRTH"];

    $insert = "INSERT INTO user_infor(NM, ID, PW, PHONE, BIRTH) VALUES('$name', '$id', '$pw', '$phone', '$birth')";
    $insert_result = mysqli_query($con, $insert);

    if($insert_result) {
        echo "삽입 성공!";
    }

    mysqli_close($con);
?>