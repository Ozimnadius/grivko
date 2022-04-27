// @prepros-append size/script.js
// @prepros-append photo/script.js
// @prepros-append acco/script.js
// @prepros-append tabs/script.js

window.addEventListener('load', function () {

    if  (document.querySelector('.product-layers')) {
        new OzimnadTabs({
            selector: '.product-layers'
        });
    }

    document.querySelectorAll('.product-slider').forEach(i => {
        let swiper = i.querySelector('.product-slider__swiper'),
            pag = i.querySelector('.product-slider__pag'),
            prev = i.querySelector('.product-slider__prev'),
            next = i.querySelector('.product-slider__next');

        new Swiper(swiper, {
            slidesPerView: 2,
            spaceBetween: 10,
            watchOverflow: true,
            pagination: {
                el: pag,
                clickable: true,
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // when window width is >= 1280px
                1280: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                }
            }
        });
    });
});