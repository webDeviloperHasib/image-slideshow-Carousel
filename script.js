let index = 1;

let slide = document.getElementsByClassName('myslide');
let dot = document.getElementsByClassName('demo');
let caption = document.getElementById('caption');

function showSlide(n){
    if(n > slide.length){index = 1}
    if(n < 1) {index = slide.length}

    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = "none"
    }
    for(let j = 0; j < dot.length; j++){
        dot[j].className = dot[j].className.replace(" active", "")
    }

    slide[index - 1].style.display = "block";
    dot[index - 1].className += " active";
    caption.innerHTML = dot[index - 1].alt;
}

showSlide(index)

function plus(n){
    showSlide(index += n)
}

function current(n){
    showSlide(index = n)
}






// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }