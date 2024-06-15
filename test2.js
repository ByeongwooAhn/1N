document.addEventListener('DOMContentLoaded', function() {
        // 현재 페이지의 query string에서 num1 값을 추출
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var num1 = urlParams.get('num1');
        
        // 받은 num1 값을 출력
        console.log('받은 num1:', num1);
        
        // 여기서 필요한 로직을 추가하여 num1 값을 사용할 수 있습니다.
    });
