import "./styles/app.scss";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const year = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: ".btn__next",
    prevEl: ".btn__prev",
  },

  pagination: {
    el: ".controls__year",
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '">' + year[index] + "</button>";
    },
  },
});

const swiperSpeed = new Swiper(".swiper-img", {
  modules: [Navigation, Pagination],
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: ".about-page__btn-next",
    prevEl: ".about-page__btn-prev",
  },
  pagination: {
    el: ".about-page__slider-pagination",
    bulletClass: "about-page__slider-bullet",
    bulletActiveClass: "about-page__slider-bullet-active",

    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});

const swiperText = new Swiper(".swiper-text", {
  modules: [Navigation, Pagination],
  allowTouchMove: false,
  speed: 0,
  loop: true,
  navigation: {
    nextEl: ".about-page__btn-next",
    prevEl: ".about-page__btn-prev",
  },
});

window.addEventListener('scroll', (e) => {

  console.log(window.scrollY)
})





$(window).on('click', event => {
  const accordion = $(event.target).closest('[data-accordion]')

  if (accordion.length) {
    const dropdown = accordion.find('[data-accordion-dropdown]')

    dropdown.slideToggle(200)
    accordion.toggleClass('active')
  }
})

