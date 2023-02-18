let slideIndex = 1;
let slideshowInterval = setInterval(showSlides, 5000);
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function plusSlides(n) {
  clearInterval(slideshowInterval);
  showSlides(slideIndex += n);
  slideshowInterval = setInterval(showSlides, 5000);
}

function currentSlide(n) {
  clearInterval(slideshowInterval);
  showSlides(slideIndex = n);
  slideshowInterval = setInterval(showSlides, 5000);
}

function pauseSlideshow() {
if (slideshowInterval) {
clearInterval(slideshowInterval);
slideshowInterval = null;
} else {
slideshowInterval = setInterval(showSlides, 5000);
}
}

function showSlides(n) {
if (n === undefined) {
slideIndex++;
} else {
slideIndex = n;
}
if (slideIndex > slides.length) {
slideIndex = 1;
}
if (slideIndex < 1) {
slideIndex = slides.length;
}
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}
