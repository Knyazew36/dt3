import "./styles/app.scss";
import "@fancyapps/fancybox";
import "select2";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './js/map.js'
import './js/geo'
import './js/counter'

// const year = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
// const swiper = new Swiper(".swiper", {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],

//   navigation: {
//     nextEl: ".btn__next",
//     prevEl: ".btn__prev",
//   },

//   pagination: {
//     el: ".controls__year",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<button class="' + className + '">' + year[index] + "</button>";
//     },
//   },
// });

// const swiperSpeed = new Swiper(".swiper-img", {
//   modules: [Navigation, Pagination],
//   allowTouchMove: false,
//   loop: true,
//   navigation: {
//     nextEl: ".about-page__btn-next",
//     prevEl: ".about-page__btn-prev",
//   },
//   pagination: {
//     el: ".about-page__slider-pagination",
//     bulletClass: "about-page__slider-bullet",
//     bulletActiveClass: "about-page__slider-bullet-active",

//     renderBullet: function (index, className) {
//       return '<span class="' + className + '"></span>';
//     },
//   },
// });

// const swiperText = new Swiper(".swiper-text", {
//   modules: [Navigation, Pagination],
//   allowTouchMove: false,
//   speed: 0,
//   loop: true,
//   navigation: {
//     nextEl: ".about-page__btn-next",
//     prevEl: ".about-page__btn-prev",
//   },
// });

// window.addEventListener("scroll", (e) => {
//   console.log(window.scrollY);
// });

// $(window).on("click", (event) => {
//   const accordion = $(event.target).closest("[data-accordion]");

//   if (accordion.length) {
//     const dropdown = accordion.find("[data-accordion-dropdown]");

//     dropdown.slideToggle(200);
//     accordion.toggleClass("active");
//   }
// });

// // modal
// {
//   $(() => {
//     const modal = $("[data-modal]");
//     const btn = $("[data-fancy-btn]");

//     const defaults = {
//       touch: false,
//       animationEffect: "left",
//     };
//     $.fancybox.defaults = { ...$.fancybox.defaults, ...defaults };

//     btn.on("click", function () {
//       $.fancybox.defaults.animationEffect = "left";

//       $.fancybox.open(modal);
//     });
//   });
// }

// // select
// {
//   $(() => {
//     // const select = $('.select__select');
//     $(".select__select").each(function () {
//       const select = $(this);
//       const selectWrapper = select.closest(".select-wrapper");
//       const selectWrapperStyles = getComputedStyle(selectWrapper[0]);
//       const selectPlaceholder = $(this).data("select-placeholder");

//       if (selectWrapperStyles.position === "static") {
//         selectWrapper.css("position", "relative");
//       }

//       select.select2({
//         dropdownParent: selectWrapper,
//         selectOnClose: true,
//         minimumResultsForSearch: Infinity,
//         // placeholder: selectPlaceholder,
//       });

//       select.on("select2:open", (e) => {
//         selectWrapper.css("z-index", "100000");
//         const evt = "scroll.select2";
//         $(e.target).parents().off(evt);
//         $(window).off(evt);

//         const selectDropdown = selectWrapper.find(".select2-dropdown");

//         selectDropdown.hide();
//         const timeout = setTimeout(() => {
//           selectDropdown.slideDown({ duration: 500 });

//           clearTimeout(timeout);
//         }, 0);
//       });

//       select.on("select2:closing", (event) => {
//         event.preventDefault();

//         const selectDropdown = selectWrapper.find(".select2-dropdown");

//         const timeout = setTimeout(() => {
//           selectWrapper.css("z-index", "");

//           const select2 = selectWrapper.find(".select2");

//           select2.addClass("closing");
//           select2.removeClass("select2-container--open");
//           selectDropdown.slideUp(500, () => {
//             const timeout2 = setTimeout(() => {
//               select.select2("destroy");
//               select.select2({
//                 dropdownParent: selectWrapper,
//                 selectOnClose: true,
//                 minimumResultsForSearch: Infinity,
//                 placeholder: selectPlaceholder,
//               });
//               select.removeClass("closing");

//               selectWrapper.css("z-index", "");

//               clearTimeout(timeout2);
//             }, 300);
//           });
//           clearTimeout(timeout);
//         }, 0);
//       });
//     });
//   });
// }

// //menu

// $(() => {
//   const header = $(".header");
//   const headerMenuBtn = $(".header__menu-btn");
//   const headerMenu = $(".menu");
//   const headerMenuContainer = $(".header__menu-container ");
//   const overlay = $(".header__overlay");

//   overlay.on("click", () => {
//     header.toggleClass("menu-open");
//   });

//   headerMenuBtn.on("click", () => {
//     if ($(window).width() > 1200) {
//       // headerMenu.slideToggle(300)
//       header.toggleClass("menu-open");
//     } else {
//       header.toggleClass("menu-open");
//       headerMenuContainer.toggleClass("header__menu-container-active");
//     }
//   });
// });

// // map
// {
//   var myMap;

//   // Дождёмся загрузки API и готовности DOM.
//   ymaps.ready(init);

//   function init() {
//     // Создание экземпляра карты и его привязка к контейнеру с
//     // заданным id ("map").
//     myMap = new ymaps.Map("map", {
//       // При инициализации карты обязательно нужно указать
//       // её центр и коэффициент масштабирования.
//       center: [55.76, 37.64], // Москва
//       zoom: 10,
//     });

//     document.getElementById("destroyButton").onclick = function () {
//       // Для уничтожения используется метод destroy.
//       myMap.destroy();
//     };

//   }
// }

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Scrollbar],
  slidesPerView: 2,
  spaceBetween: 32,
  slidesPerGroup: 2,

  wrapperClass: "swiper__wrapper ",
  slideClass: "swiper__slide",

  scrollbar: {
    el: ".swiper__scrollbar",
    draggable: true,
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

// modal
{
  $(() => {

    const modal = $('[data-modal]')
    const btn = $('[data-fancy-btn]');

    const defaults = {
      touch: false,
      animationEffect: "left",


    }
    $.fancybox.defaults = { ...$.fancybox.defaults, ...defaults }


    btn.on('click', function () {
      $.fancybox.defaults.animationEffect = "left";


      $.fancybox.open(modal)
    })
  })
}

// select
{
  $(() => {
    // const select = $('.select__select');
    $('.select__select').each(function () {
      const select = $(this);
      const selectWrapper = select.closest('.select-wrapper');
      const selectWrapperStyles = getComputedStyle(selectWrapper[0]);
      const selectPlaceholder = $(this).data('select-placeholder')

      if (selectWrapperStyles.position === 'static') {
        selectWrapper.css('position', 'relative');
      }

      select.select2({
        dropdownParent: selectWrapper,
        selectOnClose: true,
        minimumResultsForSearch: Infinity,
        // placeholder: selectPlaceholder,
      });

      select.on('select2:open', (e) => {
        selectWrapper.css('z-index', '100000');
        const evt = "scroll.select2";
        $(e.target).parents().off(evt);
        $(window).off(evt);

        const selectDropdown = selectWrapper.find('.select2-dropdown');

        selectDropdown.hide();
        const timeout = setTimeout(() => {
          selectDropdown.slideDown({ duration: 500, });

          clearTimeout(timeout);
        }, 0);
      });

      select.on('select2:closing', event => {
        event.preventDefault();

        const selectDropdown = selectWrapper.find('.select2-dropdown');

        const timeout = setTimeout(() => {
          selectWrapper.css('z-index', '');

          const select2 = selectWrapper.find('.select2');

          select2.addClass('closing');
          select2.removeClass('select2-container--open');
          selectDropdown.slideUp(500, () => {
            const timeout2 = setTimeout(() => {
              select.select2('destroy');
              select.select2({
                dropdownParent: selectWrapper,
                selectOnClose: true,
                minimumResultsForSearch: Infinity,
                placeholder: selectPlaceholder,
              });
              select.removeClass('closing');

              selectWrapper.css('z-index', '');

              clearTimeout(timeout2);
            }, 300);
          });
          clearTimeout(timeout);
        }, 0);
      });
    });
  });
}

//menu

$(() => {
  const header = $('.header')
  const headerMenuBtn = $('.header__menu-btn');
  const headerMenu = $('.menu')
  const headerMenuContainer = $('.header__menu-container ')
  const overlay = $('.header__overlay')

  overlay.on('click', () => {
    header.toggleClass('menu-open')
  })


  headerMenuBtn.on('click', () => {



    if ($(window).width() > 1200) {
      // headerMenu.slideToggle(300)
      header.toggleClass('menu-open')
    } else {
      header.toggleClass('menu-open')
      headerMenuContainer.toggleClass('header__menu-container-active')

    }


  })
})

// map
{
  var myMap;

  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(init);

  function init () {
      // Создание экземпляра карты и его привязка к контейнеру с
      // заданным id ("map").
      myMap = new ymaps.Map('map', {
          // При инициализации карты обязательно нужно указать
          // её центр и коэффициент масштабирования.
          center:[55.76, 37.64], // Москва
          zoom:10
      });
  }
}