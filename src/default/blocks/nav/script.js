window.addEventListener('load', function (){

   let imgs = $('.nav-drop__items');

   $('.nav-list__item').hover(function (){
      let elem = $(this).closest('.nav-drop').find(`.nav-drop__items[data-id=${this.dataset.id}]`);
      elem.addClass('active');
   }, function (){
      let elem = $(this).closest('.nav-drop').find(`.nav-drop__items[data-id=${this.dataset.id}]`);
      elem.removeClass('active');
   });
});