document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지의 query string에서 nm, id, pw 값을 추출
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var nm = urlParams.get('nm');
    var id = urlParams.get('id');
    var pw = urlParams.get('pw');
    var phone = urlParams.get('phone');
    var birth = urlParams.get('birth');

    var writer = urlParams.get("writer");
    var write_no = urlParams.get("write_no");
    var write_category = urlParams.get("write_category");
    var write_title = urlParams.get("write_title");
    var write_text = urlParams.get("write_text");
    var write_image = urlParams.get("write_image");
    var write_time = urlParams.get("write_time");
    
    community_load(nm, id, pw, phone, birth, writer, write_no, write_category, write_title, write_text, write_image, write_time);
});

function community_load(nm, id, pw, phone, birth, writer, write_no, write_category, write_title, write_text, write_image, write_time) {
    if(nm != null && id != null && pw != null)
    {
        console.log("받은 데이터:", nm, id, pw, phone, birth);
        console.log("글쓰기 정보: ", writer, write_no, write_category, write_title, write_text, write_image, write_time);
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

                location.href = '../IN_LOGIN.html';
                location.href = '../IN_MAIN.html';
            }
        };

        fetch('download.php')
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function(posts) {
                var write_no = 1;
                var boardBody = document.getElementById('board-body');
                var html = '';
                posts.forEach(function(post) {
                    html += `<tr>
                                <td>${write_no}</td>
                                <td>${post.write_category}</td>
                                <td>${post.write_title}</td>
                                <td>${post.writer}</td>
                                <td>${post.write_time}</td>
                            </tr>`;

                            write_no++;
                });
                boardBody.innerHTML = html;
            })
            .catch(function(error) {
                console.error('게시글 불러오기 실패:', error);
            });

            function loadPosts() {
                fetch('fetch_posts.php')
                    .then(function(response) {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then(function(posts) {
                        var boardBody = document.getElementById('board-body');
                        var html = '';
                        posts.forEach(function(post) {
                            html += `<tr data-post-id="${post.write_no}">
                                        <td>${post.write_no}</td>
                                        <td>${post.write_category}</td>
                                        <td>${post.write_title}</td>
                                        <td>${post.writer}</td>
                                        <td>${post.write_time}</td>
                                    </tr>`;
                        });
                        boardBody.innerHTML = html;
            
                        // 각 게시글 클릭 시 이벤트 처리
                        var postRows = document.querySelectorAll('#board-body tr');
                        postRows.forEach(function(row) {
                            row.addEventListener('click', function() {
                                var postId = row.getAttribute('data-post-id');
                                if (postId) {
                                    // 해당 게시글의 상세 페이지로 이동
                                    location.href = `post_detail.html?write_no=${postId}`;
                                }
                            });
                        });
                    })
                    .catch(function(error) {
                        console.error('게시글 불러오기 실패:', error);
                    });
            }
            
            // 페이지 로드 시 게시글 불러오기
            document.addEventListener('DOMContentLoaded', function() {
                loadPosts();
            });

        mainpage.onclick = function() {
            location.href = `../IN_MAIN.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
            console.log(nm, id);
        };

        //상단바 카테고리 클릭 이벤트
        // 샵
        category_shop.onclick = function() {
            location.href = `../IN_SHOP/shopmain.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        shop_1.onclick = function() {
            location.href = `../IN_SHOP/shopmain.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        // 커뮤니티
        category_community.onclick = function() {
            location.href = `../문의게시판/문의게시판main.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_1.onclick = function() {
            location.href = `../문의게시판/공지사항.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_2.onclick = function() {
            location.href = `../문의게시판/이벤트.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_3.onclick = function() {
            location.href = `../문의게시판/문의게시판.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        community_4.onclick = function() {
            location.href = `../문의게시판/상품후기.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        write_btn.onclick = function() {
            location.href = `./글쓰기.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;

        }

        //중고거래
        category_deal.onclick = function() {
            location.href = `../IN_DEAL/DEAL_MAIN.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        //원룸
        category_room.onclick = function() {
            location.href = `../IN_ROOM/IN_ROOM.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        room_1.onclick = function() {
            location.href = `../IN_ROON/IN_ROOMA.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        room_2.onclick = function() {
            location.href = `../IN_ROOM/IN_APT.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };

        room_3.onclick = function() {
            location.href = `../IN_ROOM/IN_BY.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}`;
        };
    }
}
