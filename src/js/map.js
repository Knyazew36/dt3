// {
//     ymaps.ready(init);

//     function init() {
//         var myMap = new ymaps.Map("map", {
//             center: [55.76, 37.64],
//             zoom: 10
//         });

//         const clusterer = new ymaps.Clusterer({
//             clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),
//             clusterIconShape: {
//                 type: 'Rectangle',
//                 coordinates: [[0, 0], [50, 50]]
//             },
//         });



//         const BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div class="balloon" style="margin: 10px;">' +
//             '$[properties.balloon]' +
//             '</div>',
//             {
//             });


//         // const collection = new ymaps.GeoObjectCollection();
//         const cards = document.querySelectorAll('.menu-map__card');

//         const container = document.querySelector('.menu-map__items')
//         const containerCoords = container.getBoundingClientRect()
//         const y = containerCoords.y


//         // console.log(y)
//         for (const card of cards) {

//             let data = card.dataset.coords;
//             if (!data) continue

//             // console.log(card)
//             let ballonBottom = card.querySelector('[data-item-bottom]').innerHTML
//             let balloon = card.querySelector('.menu-map__item').innerHTML


//             balloon += ballonBottom



//             const coords = JSON.parse(data)
//             const placemark = new ymaps.Placemark(coords,
//                 {
//                     balloon
//                 }, {
//                 balloonContentLayout: BalloonContentLayout,
//                 ballonPannelMaxMapArea: 0,
//                 iconImageHref: 'assets/images/placemark.svg',
//                 iconLayout: "default#image",
//                 iconImageSize: [30, 42],
//                 iconImageOffset: [-3, -42]
//             }
//             );

//             placemark.events.add('balloonopen', function (e) {
//                 card.classList.add('card-active');
//                 let yc = card.offsetTop
//                 container.scrollTop = yc
//             });

//             placemark.events.add('balloonclose', function (e) {
//                 card.classList.remove('card-active');
//             });

//             card.addEventListener('click', () => {
//                 const parent = placemark.getParent()

//                 if (!parent) {
//                     myMap.setCenter(coords, 16)
//                 }

//                 placemark.balloon.open()
//             })
//             // collection.add(placemark)
//             clusterer.add(placemark)
//         }

//         myMap.events.add('click', function (e) {

//             if (myMap.balloon.isOpen()) {

//                 myMap.balloon.close();
//             }


//         });
//         // Добавляем все метки на карту.
//         myMap.geoObjects
//             .add(clusterer)
//     }
// }
//////////////////////
// {
//     const modal = document.querySelector('.modal')
//     const li = document.querySelectorAll('.menu-slt__item')

//     window.addEventListener('click', (e) => {

//         if (!e.target.closest('[data-btn]')) return
//         console.log('dfd')
//     })
//     // for (const e of li) {
//     //     e.addEventListener('click', () => {
//     //         console.log('d')
//     //         modal.classList.add('modal-active')
//     //     })
//     // }

// }


// {
//     $(() => {

//         const modal = document.querySelectorAll('[data-modal]')
//         $(window).on('click', (e) => {
//             if (e.target.closest('[data-btn-modal]')) {
//                 console.log(e.target.closest('[data-btn-modal]').dataset.btnModal)

//                 document.querySelector(`[data-modal='${e.target.closest('[data-btn-modal]').dataset.btnModal}']`).classList.add('modal-active');


//             }


//         })
//     })
// }


$(() => {
    $(window).on('click', (e) => {
        let btn = e.target.closest('[data-btn]')

        if (!btn) return

        if (btn.dataset.btn === 'children') {
            $(btn).children("ul").addClass('menu-slt__list-active')
        } else {
            $(btn).parent().removeClass('menu-slt__list-active')
        }
    })
})