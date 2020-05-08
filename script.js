function myFunction1() {
    var btn = document.getElementsByClassName("collapsible");
    btn[0].classList.toggle("newbtn");
    var text = document.getElementsByClassName("content");
    text[0].classList.toggle("content2");
    //    setTimeout(function () {
    //        var text = document.getElementsByClassName("content");
    //        text[0].classList.toggle("content2");
    //    }, 300);

}

function myFunction2() {
    var btn = document.getElementsByClassName("collapsible");
    btn[1].classList.toggle("newbtn");
    var text = document.getElementsByClassName("content");
    text[1].classList.toggle("content2");
}

function myFunction3() {
    var btn = document.getElementsByClassName("collapsible");
    btn[2].classList.toggle("newbtn");
    var text = document.getElementsByClassName("content");
    text[2].classList.toggle("content2");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active2", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
