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
        console.log("받은 데이터:", nm, id, pw, phone, birth);

        user_name.textContent = nm;
        user_id.textContent = id;
        user_phone.textContent = phone;
        user_birth.textContent = birth;

        var loginlink = document.getElementById('loginlink');
        var joinlink = document.getElementById('joinlink');
    
        // 로그인 링크 텍스트 및 링크 경로 변경
        joinlink.innerHTML = '<a href="#">' + nm + '님</a>';
    
        joinlink.onclick = function() {
        location.href = `IN_MYPAGE.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;  // 변경할 링크 경로;  // 변경할 링크 경로
        };
    
        // 조인 링크 텍스트 및 링크 경로 변경
        loginlink.innerHTML = '<a href="#">로그아웃</a>';
                        
        loginlink.onclick = function() {
            if (window.confirm("로그아웃을 하시겠습니까?"))
            {
                alert('로그아웃 완료');
                id = null;
                nm = null;
                pw = null;
                phone = null;
                birth = null;

                joinlink.innerHTML = '<a href="IN_JOIN.html">Join</a>';

                loginlink.innerHTML = '<a href="IN_LOGIN.html">Login</a>';

                location.href = '../IN_LOGIN.html';
                location.href = '../IN_MAIN.html';
            }
        };
        
        mainpage.onclick = function() {
            location.href = `IN_MAIN.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        //상단바 카테고리 클릭 이벤트
        // 샵
        category_shop.onclick = function() {
            location.href = `./IN_SHOP/shopmain.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        shop_1.onclick = function() {
            location.href = `./IN_SHOP/shopmain.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        // 커뮤니티
        category_community.onclick = function() {
            location.href = `./문의게시판/문의게시판main.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_1.onclick = function() {
            location.href = `./문의게시판/공지사항.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_2.onclick = function() {
            location.href = `./문의게시판/이벤트.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_3.onclick = function() {
            location.href = `./문의게시판/문의게시판.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_4.onclick = function() {
            location.href = `./문의게시판/상품후기.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        //중고거래
        category_deal.onclick = function() {
            location.href = `./IN_DEAL/DEAL_MAIN.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        //원룸
        category_room.onclick = function() {
            location.href = `./IN_ROOM/IN_ROOM.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        room_1.onclick = function() {
            location.href = `./IN_ROOM/IN_ROOMA.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        room_2.onclick = function() {
            location.href = `./IN_ROOM/IN_BY.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        room_3.onclick = function() {
            location.href = `./IN_ROOM/IN_BY.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        //마이페이지
        my_community.onclick = function() {
            location.href = `MY_POST.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        }
    }
}
