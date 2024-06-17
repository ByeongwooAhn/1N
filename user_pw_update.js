function pw_update() {
    if (window.confirm("비밀번호를 변경 하시겠습니까?")) {
        var user_id = document.getElementById("user_id").textContent;
        var change_pw = document.getElementById("change_pw").value;
        var change_pw_check = document.getElementById("change_pw_check").value;
        console.log(user_id, change_pw, change_pw_check);
        var num = change_pw != change_pw_check;

        console.log(num);

        // AJAX 요청 보내기
        if(change_pw == change_pw_check)
        {
            fetch('user_pw_update.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: user_id, change_pw: change_pw })
            })
        }
        else(change_pw != change_pw_check)
        {
            alert("변경할 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        }
    }
}
