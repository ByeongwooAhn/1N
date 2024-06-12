<?php
    $db_host="localhost";
    $_db_user="guest";
    $db_password="guest2024";
    $db_name="one_in";
    $con=mysqli_connect($db_host, $_db_user, $db_password, $db_name);

    $id = "<script>document.write(iD);";
    $pw = "<script>document.write(pW);";

    /*$select = "SELECT NM, ID, PW FROM  user_infor WHERE ID = '$id' AND PW = $pw";
    $select_result = mysqli_query($con, $select);

    if($select_result) {
        echo "조회 성공!";

        $row = mysqli_fetch_array($select_result);

        $row['NM'];
        $row['ID'];
        $row['PW'];
    }
    else {

    }

    mysqli_close($con);*/
?>