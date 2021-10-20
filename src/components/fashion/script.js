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
    }
});