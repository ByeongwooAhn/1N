document.addEventListener('DOMContentLoaded', function() {
    // 세션 데이터를 가져와서 로드 함수 호출
    fetch('sessiondata.php')
    .then(response => response.json())
    .then(data => {
        if(data.nm && data.id && data.pw) {
            load(data.nm, data.id, data.pw);
        }
    })
    .catch(error => console.error('세션 데이터 불러오기 실패:', error));
});

function load(nm, id, pw) {
    console.log("받은 데이터:", nm, id, pw);
    
    /*var joinlink = document.getElementById('joinlink');
    var loginlink = document.getElementById('loginlink');

    // 로그인 링크 텍스트 및 링크 경로 변경
    joinlink.innerHTML = '<a href="#">' + nm + '님 환영합니다!</a>';
    joinlink.onclick = function() {
        location.href = '#';  // 변경할 링크 경로
    };

    // 조인 링크 텍스트 및 링크 경로 변경
    loginlink.innerHTML = '<a href="#">마이페이지</a>';
    loginlink.onclick = function() {
        location.href = 'IN_MYPAGE.html';  // 변경할 링크 경로
    };*/
}