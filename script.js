const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = carouselWrapper.children.length;

function slideNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function slidePrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const slideWidth = carouselWrapper.children[0].offsetWidth;
    carouselWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

let autoSlideInterval = setInterval(slideNext, 1000); // Auto slide every 3 seconds

// Pause auto slide on hover
carouselWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume auto slide on mouse leave
carouselWrapper.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(slideNext, 1000);
});

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);


document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carousel = document.querySelector('.product-carousel');

    prevBtn.addEventListener('click', function() {
        carousel.scrollBy({
            left: -300, // Adjust the scroll distance as needed
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function() {
        carousel.scrollBy({
            left: 300, // Adjust the scroll distance as needed
            behavior: 'smooth'
        });
    });
});

