const sliderTrack = document.querySelector('.landing__slider-track');
const sliderPaginationArr = document.querySelectorAll('.slider-pagination .pagination-dot');

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

const total = sliderPaginationArr.length;
let currentIndex = 0;

function updateSlider() {
    // currentIndex = (currentIndex + total) % total;
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    sliderPaginationArr.forEach(dot => dot.classList.remove('active'));
    sliderPaginationArr[currentIndex].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    updateSlider();
});

sliderPaginationArr.forEach((dot, index) =>
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    })
)