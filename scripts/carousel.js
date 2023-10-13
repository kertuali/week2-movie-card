const slides = document.getElementsByClassName('carousel_item');
const slidesTotal = slides.length;
const nextButton = document.querySelector('#carousel_button-next');
const prevButton = document.querySelector('#carousel_button-prev');

let slidePosition = 0;

nextButton.addEventListener('click', () => {
    console.log('click from next');

    for(let slide of slides){
        slide.classList.remove('carousel_item-visible');
    }

    if(slidePosition === slidesTotal - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add('carousel_item-visible');
})

prevButton.addEventListener('click', () => {
    console.log('click from prev');

    for(let slide of slides){
        slide.classList.remove('carousel_item-visible');
    }

    if(slidePosition === 0) {
        slidePosition = slidesTotal - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add('carousel_item-visible');
});