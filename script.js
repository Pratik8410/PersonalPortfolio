// typed script

var typed = new Typed('#element', {
  strings: ['Web Developer.',],
  typeSpeed: 50,
  fadeOut: true,
  loop: true
});

// navbar-background color

const nav = document.querySelector('.navbar')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 56) {
    nav.classList.add('navbar-scrolled')
  } else {
    nav.classList.remove('navbar-scrolled')
  }
})

// tabing

const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
  li.forEach(item =>
    item.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu()
window.addEventListener("scroll", activeMenu);




AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})
