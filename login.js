function login() {
    if (window.confirm("로그인을 하시겠습니까?")) {
        var loginid = document.getElementById("login_id").value;
        var loginpassword = document.getElementById("login_password").value;
        console.log(loginid, loginpassword);

        // AJAX 요청 보내기
        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login_id: loginid, login_password: loginpassword })
        })
        .then(response => response.json())
        .then(data => {
            if(data.logincheck == 1)
            {
                alert('로그인 완료');
                location.href = `IN_MAIN.html?nm=${encodeURIComponent(data.nm)}&id=${encodeURIComponent(data.id)}&pw=${encodeURIComponent(data.pw)}`;
            }
            else if(data.logincheck == 0)
            {
                alert(data.error);
            }
        })
        .catch(error => console.error('에러 발생:', error));
    }
}
