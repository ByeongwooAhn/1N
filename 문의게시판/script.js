document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const defaultMenuItem = menuItems[0]; // 첫 번째 메뉴 항목을 기본값으로 설정합니다.

    // 페이지가 로드될 때, 로컬 저장소에서 활성 메뉴 항목을 확인하고 적용합니다.
    let activeMenuItem = localStorage.getItem('activeMenuItem');

    // 특정 페이지(문의게시판)에서는 기본값으로 설정합니다.
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '문의게시판main.html') {
        activeMenuItem = null;
        localStorage.removeItem('activeMenuItem');
    }

    function setActiveMenuItem(menuItem) {
        menuItem.classList.add('active');
        menuItem.style.backgroundColor = '#555555';
        menuItem.style.color = 'white';
        localStorage.setItem('activeMenuItem', menuItem.getAttribute('href'));
    }

    if (activeMenuItem) {
        const menuItem = document.querySelector(`.menu-item[href="${activeMenuItem}"]`);
        if (menuItem) {
            setActiveMenuItem(menuItem);
        }
    } else {
        setActiveMenuItem(defaultMenuItem);
    }

    // 각 메뉴 항목에 이벤트 리스너를 추가합니다.
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '#d3d3d3'; // 연한 그레이
            }
        });

        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = ''; // 원래 배경색으로 돌아옴
            }
        });

        item.addEventListener('click', function() {
            // 모든 메뉴 항목의 활성화 상태를 초기화합니다.
            menuItems.forEach(item => {
                item.classList.remove('active');
                item.style.backgroundColor = ''; // 기본 배경색으로
            });

            // 클릭한 메뉴 항목을 활성화하고 로컬 저장소에 저장합니다.
            setActiveMenuItem(this);
        });
    });
});