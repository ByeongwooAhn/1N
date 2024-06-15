function send() {
    // 변수 값 설정
    var num1 = '1';
    
    // query string으로 변수 값을 전달하면서 second.html 페이지로 이동
    window.location.href = `test2.html?num1=${encodeURIComponent(num1)}`;
}
