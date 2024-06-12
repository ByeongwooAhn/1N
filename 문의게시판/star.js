document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star_rivew');
    let selectedRating = 0;

    stars.forEach(star_rivew => {
        star_rivew.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-rating');
            updateStarRating(selectedRating);
        });

        star_rivew.addEventListener('mouseover', function() {
            highlightStars(this.getAttribute('data-rating'));
        });

        star_rivew.addEventListener('mouseout', function() {
            highlightStars(selectedRating);
        });
    });

    function updateStarRating(rating) {
        stars.forEach(star_rivew => {
            if (star_rivew.getAttribute('data-rating') <= rating) {
                star_rivew.classList.add('selected');
            } else {
                star_rivew.classList.remove('selected');
            }
        });
    }

    function highlightStars(rating) {
        stars.forEach(star_rivew => {
            if (star_rivew.getAttribute('data-rating') <= rating) {
                star_rivew.classList.add('hover');
            } else {
                star_rivew.classList.remove('hover');
            }
        });
    }

    // 댓글 제출 버튼 관련 코드도 추가할 수 있습니다.
});