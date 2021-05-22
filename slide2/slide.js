var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("card");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 10000);
}




var slideIndex = 1;
showSlide(slideIndex);


function currentSlide(n) {
    showSlide(slideIndex = n);

}


function plusSlides(n) {
    showSlide(slideIndex += n);

}

function showSlide(n) {
    var i;



    const slides = document.getElementsByClassName("card");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[slideIndex - 1].style.display = "block";




}