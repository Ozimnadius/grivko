//USER

//COMPONENTS

// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    }
};

window.addEventListener("load", function (){
    $('.input[type="tel"]').inputmask("+7(999)999-99-99");
});

//revs.js
window.addEventListener("load", function (){
    console.log('REVS.JS');

    const revsSwiper = new Swiper('.revs__swiper', {
        slidesPerView: "auto",
        // loop: true,
        spaceBetween: 8,
        // Navigation arrows
        navigation: {
            nextEl: '.revs__next',
            prevEl: '.revs__prev',
        },
    });


    // document.querySelectorAll('.rev').forEach(i=>i.addEventListener('click', sendAjax));
    //
    // function sendAjax(){
    //     $.ajax({
    //         dataType: "json",
    //         type: "POST",
    //         url: '/php/rev.php',
    //         data: {
    //             id: this.dataset.id
    //         },
    //         success: function (result) {
    //             if (result.status) {
    //                 console.log(result);
    //                 $.fancybox.open(result.html);
    //             } else {
    //                 alert('Что-то пошло не так, попробуйте еще раз!!!');
    //             }
    //         },
    //         error: function (result) {
    //             alert('Что-то пошло не так, попробуйте еще раз!!!');
    //         }
    //     });
    // }



});
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
//# sourceMappingURL=script.js.map