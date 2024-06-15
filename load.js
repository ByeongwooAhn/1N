document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지의 query string에서 nm, id, pw 값을 추출
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var nm = urlParams.get('nm');
    var id = urlParams.get('id');
    var pw = urlParams.get('pw');
    
    load(nm, id, pw);
    console.log(nm, id, pw);
});

function load(nm, id, pw) {
    if(nm != null && id != null && pw != null)
    {
        console.log("받은 데이터:", nm, id, pw);
        // 여기서 로드 후 실행할 코드를 작성
    
        var loginlink = document.getElementById('loginlink');
        var joinlink = document.getElementById('joinlink');
    
        // 로그인 링크 텍스트 및 링크 경로 변경
        joinlink.innerHTML = '<a href="#">' + nm + '님 환영합니다!</a>';
    
        joinlink.onclick = function() {
        location.href = '#';  // 변경할 링크 경로
        };
    
        // 조인 링크 텍스트 및 링크 경로 변경
        loginlink.innerHTML = '<a href="#">마이페이지</a>';
                        
        loginlink.onclick = function() {
        location.href = 'IN_MYPAGE.html';  // 변경할 링크 경로
        };
    }
}
