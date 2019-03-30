const slides = document.querySelectorAll('.mainslider__slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const slidesImg = document.querySelectorAll('.mainslider__slide > img');
console.log(slidesImg);

// For making image parent background
slidesImg.forEach(val => {
    var imgSrc = val.getAttribute('src');
    var imgUrl = ("url("+imgSrc+")");
    val.parentElement.style.backgroundImage= imgUrl; 
});

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.mainslider__slide--current');
    // Remove current class
    current.classList.remove('mainslider__slide--current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('mainslider__slide--current');
    } else {
        // Add current to start
        slides[0].classList.add('mainslider__slide--current')
    }
    setTimeout(() => current.classList.remove('mainslider__slide--current'));
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.mainslider__slide--current');
    // Remove current class
    current.classList.remove('mainslider__slide--current');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('mainslider__slide--current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('mainslider__slide--current')
    }
    setTimeout(() => current.classList.remove('mainslider__slide--current'));
}

// Button events

next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval();
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval();
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


// Auto slide {
if (auto) {
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}