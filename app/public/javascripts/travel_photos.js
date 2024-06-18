const previous_button = document.getElementById("prev");
let slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("travel-slideshow");


    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");        
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    if (id_kara === true) {
        document.getElementById("travel-text-title").innerHTML = "Karakoram Highway";
    }else if (id_india === true) {
        document.getElementById("travel-text-title").innerHTML = "India";
    } else if (id_pan === true) {
        document.getElementById("travel-text-title").innerHTML = "Panama";
    }
}

showSlides(slideIndex);
previous_button.addEventListener("onclick", plusSlides(-1));


