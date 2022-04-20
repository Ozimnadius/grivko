window.addEventListener('load', function (){
   if(media.mobile.matches){
       const gallerySwiper = new Swiper('.gallery__swiper', {
           slidesPerView: 2,
           // loop: true,
           spaceBetween: 10,
           navigation: {
               nextEl: '.gallery__next',
               prevEl: '.gallery__prev',
           },
       });
   }
});