window.addEventListener('load', function () {
    if (media.mobile.matches) {
        $('.fashion-drop__btn').on('click', function () {
            $('.fashion-drop__drop').slideToggle();
        });

        $(window).on('click', function (e){
           if(!e.target.closest('.fashion-drop')){
               $('.fashion-drop__drop').slideUp();
           }
        });

        const elem = document.querySelector('.fashion__swiper');
        if (elem) {
            const revsSwiper = new Swiper(elem, {
                slidesPerView: 2,
                spaceBetween: 5,
                // Navigation arrows
                navigation: {
                    nextEl: '.fashion__next',
                    prevEl: '.fashion__prev',
                },
            });
        }
    }
});