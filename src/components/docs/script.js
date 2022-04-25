window.addEventListener('load', function () {
    if (media.mobile.matches) {
        $('.doc__title').each(function (x, i) {
            let $i = $(i);

            $i.on('click', function (){
               let $btn = $(this),
                   $doc = $btn.closest('.doc'),
                   $content = $doc.find('.doc__content'),
                   $left = $doc.find('.doc__left');

               $btn.toggleClass('active');
               $content.slideToggle();
               $left.slideToggle();
            });
        });
    }
});