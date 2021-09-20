//choose.js
window.addEventListener("load", function () {
    console.log('CHOOSE.JS');

    class Check {
        constructor() {
            this.nav = $(".choose__nav");
            this.inputus = $(".choose-slide__input");

            this.inputus.on("change", () => {
                this.activateNav();
            });
        }

        check(slide) {

            if (!slide.find('.choose-slide__input:checked').length > 0) {
                this.deactivateNav();
            } else {
                this.activateNav();
            }
        }

        activateNav() {
            this.nav.removeClass("disabled");
        }

        deactivateNav() {
            this.nav.addClass("disabled");
        }
    }

    let test = new Check();

    const chooseSwiper = new Swiper('.choose__swiper', {
        // initialSlide: 5,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: false,
        // Navigation arrows
        navigation: {
            nextEl: '.choose__next',
            prevEl: '.choose__prev',
        },
        // If we need pagination
        pagination: {
            el: '.choose__pag',
        },
        // onAny(eventName,...args){
        //     console.log(eventName);
        // },
        on: {
            init: function () {
                let $slide = $(this.slides[this.activeIndex]),
                    $checked = $slide.find('.choose-slide__input:checked');
                test.check($slide);

            },
            slideChange: function () {
                let $slide = $(this.slides[this.activeIndex]),
                    $checked = $slide.find('.choose-slide__input:checked');

                test.check($slide);


            }
        }
    });


});