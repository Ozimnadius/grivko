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