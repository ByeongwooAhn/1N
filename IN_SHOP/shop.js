document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="bigbox-3-box-1-smallbox-3-radio"]');
    const bigbox = document.getElementById('bigbox-3-box-1');
    const textBox = document.getElementById('bigbox-3-box-1-smallbox-2-text-1');

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            switch (radio.id) {
                case 'bigbox-3-box-1-smallbox-3-radio-1':
                    bigbox.style.backgroundImage = "url('img/big/big1.jpg')";
                    textBox.value = '원피스';
                    break;
                case 'bigbox-3-box-1-smallbox-3-radio-2':
                    bigbox.style.backgroundImage = "url('img/big/big2.jpg')";
                    textBox.value = '검은 후드티';
                    break;
                case 'bigbox-3-box-1-smallbox-3-radio-3':
                    bigbox.style.backgroundImage = "url('img/big/big3.jpg')";
                    textBox.value = '티셔츠';
                    break;
                case 'bigbox-3-box-1-smallbox-3-radio-4':
                    bigbox.style.backgroundImage = "url('img/big/big4.jpg')";
                    textBox.value = '노랑 후드티';
                    break;
                case 'bigbox-3-box-1-smallbox-3-radio-5':
                    bigbox.style.backgroundImage = "url('img/big/big5.jpg')";
                    textBox.value = '니트';
                    break;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="bigbox-3-box-2-smallbox-2-radio"]');
    const textBox = document.querySelector('.bigbox-3-box-2-smallbox-1-tiny-1-bottom-text-1');
    const imageElements = [
        document.getElementById('bigbox-3-box-2-smallbox-1-tiny-1-top'),
        document.getElementById('bigbox-3-box-2-smallbox-1-tiny-2-top'),
        document.getElementById('bigbox-3-box-2-smallbox-1-tiny-3-top'),
        document.getElementById('bigbox-3-box-2-smallbox-1-tiny-4-top')
    ];

    const images = [
        ['img/small/1.jpg', 'img/small/2.jpg', 'img/small/3.jpg', 'img/small/4.jpg'],
        ['img/small/5.jpg', 'img/small/6.jpg', 'img/small/7.jpg', 'img/small/8.jpg'],
        ['img/small/9.jpg', 'img/small/10.jpg', 'img/small/11.jpg', 'img/small/12.jpg'],
        ['img/small/13.jpg', 'img/small/14.jpg', 'img/small/15.jpg', 'img/small/16.jpg'],
        ['img/small/17.jpg', 'img/small/18.jpg', 'img/small/19.jpg', 'img/small/20.jpg']
    ];

    const texts = [
        '첫번째 사진입니다.',
        '두번째 사진입니다.',
        '세번째 사진입니다.',
        '네번째 사진입니다.',
        '다섯번째 사진입니다.'
    ];

    radios.forEach((radio, index) => {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                imageElements.forEach((element, i) => {
                    element.style.backgroundImage = `url('${images[index][i]}')`;
                });
                textBox.textContent = texts[index];
            }
        });
    });
});

