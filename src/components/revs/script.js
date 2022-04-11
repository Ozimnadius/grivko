//revs.js
window.addEventListener("load", function (){
    const elem = document.querySelector('.revs__swiper');
    if (elem){
        const revsSwiper = new Swiper(elem, {
            slidesPerView: 2,
            // loop: true,
            spaceBetween: 5,
            // Navigation arrows
            navigation: {
                nextEl: '.revs__next',
                prevEl: '.revs__prev',
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 8,
                },
                // when window width is >= 1280px
                1280: {
                    spaceBetween: 8,
                }
            }
        });


    }
});