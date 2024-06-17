document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지의 query string에서 nm, id, pw 값을 추출
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var nm = urlParams.get('nm');
    var id = urlParams.get('id');
    var pw = urlParams.get('pw');
    var phone = urlParams.get('phone');
    var birth = urlParams.get('birth');
    
    load(nm, id, pw, phone, birth);
    console.log(nm, id, phone, birth);
});

function load(nm, id, pw, phone, birth) {
    if(nm != null && id != null && pw != null)
    {
        console.log(nm, id, phone, birth);
        // 여기서 로드 후 실행할 코드를 작성
    
        var loginlink = document.getElementById('loginlink');
        var joinlink = document.getElementById('joinlink');
    
        // 로그인 링크 텍스트 및 링크 경로 변경
        joinlink.innerHTML = '<a href="#">' + nm + '님</a>';
    
        joinlink.onclick = function() {
        location.href = `../IN_MYPAGE.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;  // 변경할 링크 경로;  // 변경할 링크 경로
        };
    
        // 조인 링크 텍스트 및 링크 경로 변경
        loginlink.innerHTML = '<a href="#">로그아웃</a>';
                        
        loginlink.onclick = function() {
            if (window.confirm("로그아웃 하시겠습니까?"))
            {
                alert('로그아웃 완료');
                id = null;
                nm = null;
                pw = null;
                phone = null;
                birth = null;

                joinlink.innerHTML = '<a href="IN_JOIN.html">Join</a>';

                loginlink.innerHTML = '<a href="IN_LOGIN.html">Login</a>';

                location.href = 'IN_LOGIN.html';
                location.href = 'IN_MAIN.html';
            }
        };

        mainpage.onclick = function() {
            location.href = `../IN_MAIN.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        shop_btn.onclick = function() {
            location.href = `./IN_SHOP/shopmain.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;

        };

        community_btn.onclick = function() {
            location.href = `./문의게시판/문의게시판main.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;

        };

        deal_btn.onclick = function() {
            location.href = `./IN_DEAL/DEAL_MAIN.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;

        };

        room_btn.onclick = function() {
            location.href = `./IN_ROOM/IN_ROOM.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;

        };
    }
    else
    {
        mainpage.onclick = function() {
            location.href = '../IN_MAIN.html';
        };
        
        shop_btn.onclick = function() {
            location.href = './IN_SHOP/shopmain.html';
        }
        
        community_btn.onclick = function() {
            location.href = './문의게시판/문의게시판main.html';
        };
        
        deal_btn.onclick = function() {
            location.href = './IN_DEAL/DEAL_MAIN.html';
        };
        
        room_btn.onclick = function() {
            location.href = './IN_ROOM/IN_ROOM.html';
        };
    }
}
