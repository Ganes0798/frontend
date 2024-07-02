document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const dotContainer = document.querySelector('.dot-container');
    let currentSlideIndex = 0;
    let slideInterval;

    function createDots() {
        for (let i = 0; i < slides.children.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentSlideIndex = i;
                updateSlide();
                stopSlider();
            });
            dotContainer.appendChild(dot);
        }
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlideIndex);
        });
    }

    function slide(direction) {
        if (direction === 'next') {
            currentSlideIndex++;
            if (currentSlideIndex >= slides.children.length) {
                currentSlideIndex = 0;
            }
        } else {
            currentSlideIndex--;
            if (currentSlideIndex < 0) {
                currentSlideIndex = slides.children.length - 1;
            }
        }
        updateSlide();
    }

    function updateSlide() {
        const slideWidth = slides.querySelector('.slide').clientWidth;
        const translateX = -currentSlideIndex * slideWidth;
        slides.style.transform = `translate3d(${translateX}px, 0, 0)`;
        updateDots();
    }

    function startSlider() {
        slideInterval = setInterval(() => slide('next'), 2000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    createDots();
    startSlider();

    slides.addEventListener('mouseenter', stopSlider);
    slides.addEventListener('mouseleave', startSlider);
});

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".sticky-header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 30) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
});

// document.addEventListener('scroll', function() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     var scrollSpeed = 0.3;
  
//     var background = document.querySelector('.background');
//     background.style.backgroundPositionY = -(scrollTop * scrollSpeed) + 'px';
//   });



  document.addEventListener("DOMContentLoaded", function(){
    const locationCount = document.getElementById("project-count");
    let start = 0;
    const end = 35;
    const duration = 2000;
    const increment = end /(duration / 10);
    const updateCount = () => {
        start += increment;
        if(start>=end){
            locationCount.textContent = end.toString() + '+';
            clearInterval(countInterval);
        }
        else {
            locationCount.textContent = Math.ceil(start).toString();
        }
    };
    const countInterval = setInterval(updateCount, 10);
});


document.addEventListener("DOMContentLoaded", function(){
    const locationCount = document.getElementById("worker-count");
    let start = 0;
    const end = 1900;
    const duration = 2000;
    const increment = end /(duration / 10);
    const updateCount = () => {
        start += increment;
        if(start>=end){
            locationCount.textContent = end.toString() + '+';
            clearInterval(countInterval);
        }
        else {
            locationCount.textContent = Math.ceil(start).toString();
        }
    };
    const countInterval = setInterval(updateCount, 10);
});

document.addEventListener("DOMContentLoaded", function(){
    const locationCount = document.getElementById("location-count");
    let start = 0;
    const end = 750;
    const duration = 2000;
    const increment = end /(duration / 10);
    const updateCount = () => {
        start += increment;
        if(start>=end){
            locationCount.textContent = end.toString() + '+';
            clearInterval(countInterval);
        }
        else {
            locationCount.textContent = Math.ceil(start).toString();
        }
    };
    const countInterval = setInterval(updateCount, 10);
});


// document.addEventListener("DOMContentLoaded", function(){
//      const scrollContent = document.getElementById("about-content");

//      document.addEventListener("scroll", function(){
//          scrollContent.style.animation = `fadeInLeft 1s ease-in-out`;
//      });

// });


let currentIndex = 0;
let slideInterval;

function showCard(index) {
    const slider = document.getElementById('slider');
    const cards = document.querySelectorAll('.slider-card-col');
    if (index >= cards.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = cards.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 20;
    slider.style.transform = `translateX(${offset}%)`;
}

function startAutomaticSlider() {
    slideInterval = setInterval(nextCard, 2000);
}

function stopAutomaticSlider() {
    clearInterval(slideInterval);
}

function nextCard() {
    showCard(currentIndex + 1);
}

function prevCard() {
    showCard(currentIndex - 1);
}

startAutomaticSlider();



