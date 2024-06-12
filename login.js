function login() {
    if(window.confirm("로그인을 하시겠습니까?")) {
        alert('로그인 완료');

        const iD = id.value;
        const pW = password.value;

        console.log(iD, pW);

        //location.href = 'IN_MAIN.html';

        var Id = "<? echo $id;?>";
        var Pw = "<? echo $pw;?>";

        console.log(Id, Pw);
    }
}