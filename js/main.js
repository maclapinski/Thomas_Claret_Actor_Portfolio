const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

// slideshow

var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

// ********************
// Gallery Slider
var slideIndexG = 1;
showSlidesG(slideIndexG);

function plusSlidesG(n) {
  showSlidesG(slideIndexG += n);
}

function currentSlideG(n) {
  showSlidesG(slideIndexG = n);
}

function showSlidesG(n) {
  var i;
  var slidesG = document.getElementsByClassName("myGallery");
  var dots = document.getElementsByClassName("dot");
  if (n > slidesG.length) {slideIndexG = 1}    
  if (n < 1) {slideIndexG = slidesG.length}
  for (i = 0; i < slidesG.length; i++) {
      slidesG[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesG[slideIndexG-1].style.display = "block";  
  dots[slideIndexG-1].className += " active";
}
//*********************** */
