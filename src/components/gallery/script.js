window.addEventListener('load', function (){
   if(media.mobile.matches){
       const gallerySwiper = new Swiper('.gallery__swiper', {
           slidesPerView: "auto",
           // loop: true,
           spaceBetween: 10,
       });
   }
});