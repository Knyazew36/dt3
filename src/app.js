import "./styles/app.scss";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// init Swiper:

const year = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.btn__next',
    prevEl: '.btn__prev',
  },

  pagination: {
    el: '.controls__year',
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '">' + (year[index]) + '</button>';
    },
  },

});


const swiperSpeed = new Swiper('.swiper-speed', {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.speed__btn-next',
    prevEl: '.speed__btn-prev',
  },
  pagination: {
    el: '.speed__pagination',
    bulletClass: 'swiper-speed__pagination-bullet',
    bulletActiveClass: 'swiper-speed__pagination-bullet-active',

    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    }
  },


});


const swiperVertical = new Swiper('.swiper-vertical', {
  direction: 'vertical',
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.speed__btn-next',
    prevEl: '.speed__btn-prev',
  },
});

