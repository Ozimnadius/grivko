//fashion.js
window.addEventListener('load', function () {
    console.log("FASHION.JS");

    document.querySelectorAll('.fashion__item').forEach((i) => i.addEventListener('click', (e) => {
        e.preventDefault();
        sendAjax(e.target.dataset.id);
    }));

    function sendAjax(id) {
        $.ajax({
            dataType: "json",
            type: "POST",
            url: '/php/fashion.php',
            data: {
                id: id
            },
            success: function (result) {
                if (result.status) {
                    $.fancybox.open(result.html);

                    const slider = new Swiper('.fashion-card__swiper', {
                        loop: true,
                        spaceBetween: 10,
                        // Navigation arrows
                        navigation: {
                            nextEl: '.fashion-card__next',
                            prevEl: '.fashion-card__prev',
                        },
                        pagination: {
                            el: '.fashion-card__pag',
                        },
                    });

                } else {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            },
            error: function (result) {
                alert('Что-то пошло не так, попробуйте еще раз!!!');
            }
        });
    }

});