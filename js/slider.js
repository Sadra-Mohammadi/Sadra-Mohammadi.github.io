const slideElement = document.getElementById('slider-image'); // انتخاب ID به جای کلاس
const indicators = document.querySelectorAll('.indicator');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const playPauseButton = document.querySelector('.play-pause i');
const sliderContainer = document.querySelector('.slider-container');

// آرایه شامل تصاویر
const images = [
    "../images/asus/1.jpeg",
    "../images/asus/2.webp",
    "../images/asus/3.jpeg",
    "../images/asus/4.webp",
    "../images/asus/5.jpeg",
    "../images/asus/6.jpeg"
];

let currentIndex = 0;
let isPlaying = false;
let interval;

// این تابع برای به روزرسانی تصویر و اندیکاتورها است
function updateSlider(index) {
    slideElement.src = images[index]; // تغییر src تصویر

    indicators.forEach((indicator, i) => {
        const child = indicator.querySelector('.child');
        if (i === index) {
            indicator.classList.add('active'); // نشانگر فعال
            child.classList.add('active'); // فعال کردن نوار داخل
        } else {
            indicator.classList.remove('active'); // حذف نشانگر فعال
            child.classList.remove('active'); // غیر فعال کردن نوار داخل
        }
    });
}


// تابع برای شروع اسلایدر خودکار
function playSlider() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    }, 5000);
    playPauseButton.classList.replace('fa-play', 'fa-pause');
    isPlaying = true;
}

// تابع برای توقف اسلایدر
function pauseSlider() {
    clearInterval(interval);
    playPauseButton.classList.replace('fa-pause', 'fa-play');
    isPlaying = false;
}

// کلیک روی اندیکاتورها
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        pauseSlider();
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        updateSlider(currentIndex);
    });
});

// کلیک روی فلش چپ
leftArrow.addEventListener('click', () => {
    pauseSlider();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider(currentIndex);
});

// کلیک روی فلش راست
rightArrow.addEventListener('click', () => {
    pauseSlider();
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider(currentIndex);
});

// کلیک روی دکمه پخش/توقف
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        pauseSlider();
    } else {
        playSlider();
    }
});

// توقف اسلایدر هنگام حرکت ماوس و شروع مجدد بعد از خروج ماوس
sliderContainer.addEventListener('mouseenter', pauseSlider);
sliderContainer.addEventListener('mouseleave', playSlider);

// مقداردهی اولیه
updateSlider(currentIndex); // به روز رسانی تصویر اولیه
playSlider(); // شروع پخش خودکار