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

//zoom in

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function handleScroll() {
    const elements = document.querySelectorAll('.zoom-in');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('zoom-in-visible');
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

//slide in left

function isSliderHandleLeft(leftSlide) {
    const rect = leftSlide.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollLeftHandler() {
    const elements = document.querySelectorAll('.slide-in-left');
    elements.forEach(element => {
        if (isSliderHandleLeft(element)) {
            element.classList.add('slide-in-left-visible');
        }
    });
}
window.addEventListener('scroll', scrollLeftHandler);
scrollLeftHandler();


//slide in right

function isSliderHandleRight(rightSlide) {
    const rect = rightSlide.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollRightHandler() {
    const elements = document.querySelectorAll('.slide-in-right');
    elements.forEach(element => {
        if (isSliderHandleRight(element)) {
            element.classList.add('slide-in-right-visible');
        }
    });
}
window.addEventListener('scroll', scrollRightHandler);
scrollRightHandler();


// fade slide up

function isSliderHandleUp(upSlider) {
    const rect = upSlider.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollUpHandler() {
    const elements = document.querySelectorAll('.fade-slide-up');
    elements.forEach(element => {
        if (isSliderHandleUp(element)) {
            element.classList.add('fade-slide-up-visible');
        }
    });
}
window.addEventListener('scroll', scrollUpHandler);
scrollUpHandler();

// flip in

function isFlipInHandler(flipIn) {
    const rect = flipIn.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollFlipInHandler() {
    const elements = document.querySelectorAll('.flip-in');
    elements.forEach(element => {
        if (isFlipInHandler(element)) {
            element.classList.add('flip-in-visible');
        }
    });
}
window.addEventListener('scroll', scrollFlipInHandler);
scrollFlipInHandler();



// rotate in
function isRotateHandler(rotateIn) {
    const rect = rotateIn.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollRotateHandler() {
    const elements = document.querySelectorAll('.rotate-in');
    elements.forEach(element => {
        if (isRotateHandler(element)) {
            element.classList.add('rotate-in-visible');
        }
    });
}
window.addEventListener('scroll', scrollRotateHandler);
scrollRotateHandler();