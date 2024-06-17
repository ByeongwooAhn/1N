function write_save() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var nm = urlParams.get('nm');
    var id = urlParams.get('id');
    var pw = urlParams.get('pw');
    var phone = urlParams.get('phone');
    var birth = urlParams.get('birth');

    if (window.confirm("게시글을 등록 하시겠습니까?")) {
        var today = new Date();

        var writer = document.getElementById("writer").textContent;
        var write_category = document.getElementById("write_category").value;
        var write_title = document.getElementById("write_title").value;
        var write_text = document.getElementById("write_text").value;
        
        var fileInput = document.getElementById('write_image');
        var file = fileInput.files[0]; // 첫 번째 파일만 가져옴
        
        var formData = new FormData();
        formData.append('writer', writer);
        formData.append('write_category', write_category);
        formData.append('write_title', write_title);
        formData.append('write_text', write_text);
        formData.append('write_time', today.toLocaleString());

        if (file) {
            formData.append('write_image', file); // 파일 추가
        }

        fetch('upload.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            if (data.includes('삽입 성공')) {
                alert('글이 성공적으로 저장되었습니다.');
                location.href = `../문의게시판/문의게시판main.html?nm=${encodeURIComponent(nm)}&id=${encodeURIComponent(id)}&pw=${encodeURIComponent(pw)}&phone=${encodeURIComponent(phone)}&birth=${encodeURIComponent(birth)}&writer=${encodeURIComponent(writer)}&write_category=${encodeURIComponent(write_category)}&write_title=${encodeURIComponent(write_title)}&write_text=${encodeURIComponent(write_text)}&write_time=${encodeURIComponent(today.toLocaleString())}`;
            } else {
                alert('저장 중 오류가 발생했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('저장 중 오류가 발생했습니다.');
        });
    }
}
