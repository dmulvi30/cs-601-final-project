const previous_button = document.getElementById("previous");
const next_button = document.getElementById("next");

let slide_index = 0;

function nextSlide(number) {
    getSlide(slide_index += number);
}

function currentSlide(number) {
    getSlide(slide_index = number);
}

function getSlide(number) {
    let index;
    let slides = document.getElementsByClassName("travel-slideshow");


    let dots = document.getElementsByClassName("dot");
    if (number > slides.length) {
        slide_index = 1
    }
    if (number < 1) {
        slide_index = slides.length
    }
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }
    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].className += " active";
}

getSlide(slide_index);
previous_button.addEventListener("click", nextSlide(-1));
next_button.addEventListener("click", nextSlide(1));


