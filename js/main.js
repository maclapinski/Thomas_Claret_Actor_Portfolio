const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const app = {};

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
navItems.forEach((item) => item.addEventListener("click", toggleMenu));

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

// slideshow

var slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"];
// showSlides(1, 0);
// showSlides(1, 1);
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
function plusSlides(n, no) {
  console.log("plus");
  showSlides((slideIndex[no] += n), no);
}

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => plusSlides(1, 1), 3000);

// Initialize Swiper

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   effect: "fade",
//   loop: true,
//   // centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   effect: "cube",
//   grabCursor: true,
//   loop: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

const windowWidth = window.innerWidth;

if (windowWidth > 1024) {
   const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      // centeredSlides: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
   const swiper = new Swiper(".mySwiper", {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

// ********************

////Function to add the scrolled class to the nav bar once it starts scrolling
app.scroll = () => {
  $(document).scroll(function () {
    let nav = $(".nav");
    nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
  });
};

//use window.scrollY
var scrollpos = window.scrollY;

function add_class_on_scroll() {
  nav.classList.add("scrolled");
}

function remove_class_on_scroll() {
  nav.classList.remove("scrolled");
}

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

//Event listener to scroll back to top
// $("#scrollUp").click(function () {
//   $("html, body").animate({ scrollTop: 0 }, "300");
// });
//*********************** */


