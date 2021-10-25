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

/* Code for changing active 
            link on clicking */
var btns = $("#nav .menu-nav .menu-nav__item");
console.log(btns);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Code for changing active 
            link on Scrolling */
$(window)
  .scroll(function () {
    var distance = $(window).scrollTop();
    $("section").each(function (i) {
      if ($(this).position().top <= distance + 500) {
        $(".menu-nav li.active").removeClass("active");

        $(".menu-nav li").eq(i).addClass("active");
      }
    });
  })
  .scroll();

//Event listener to scroll back to top
// $("#scrollUp").click(function () {
//   $("html, body").animate({ scrollTop: 0 }, "300");
// });
//*********************** */
