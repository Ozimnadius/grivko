window.addEventListener('load',function (){
    const swiper = new Swiper('.banner__swiper', {
        speed: 500,
        effect: "creative",
        loop: true,
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        // If we need pagination
        pagination: {
            el: '.banner__pag',
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.banner__next',
            prevEl: '.banner__prev',
        },
        autoplay: {
            delay: 5000,
        },
    });
});