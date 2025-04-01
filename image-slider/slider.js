 const images = [
    '/img/img2.jpg',
    '/img/img1.jpg',
    '/img/img3.jpg'
];

const slider = document.querySelector('.slider');
let currentIndex = 0;

// Create slides 
images.forEach((src, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.transform = `translateX(${index * 100}%)`;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Slide ${index + 1}`;
    
    slide.appendChild(img);
    slider.appendChild(slide);

});

// Update slide
function updateSlides(index) {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    currentIndex = index;
}

// Navigation
function goToPrev() {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateSlides(currentIndex);
}

function goToNext() {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateSlides(currentIndex);
}


document.querySelector('.prev').addEventListener('click', goToPrev);
document.querySelector('.next').addEventListener('click', goToNext);

