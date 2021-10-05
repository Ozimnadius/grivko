window.addEventListener('load', function () {
    new Actions('.jsAction');
});

class Actions {
    constructor(selector, props) {

        this.fashions = document.querySelectorAll(`${selector}[data-action="fashion"]`);
        this.teams = document.querySelectorAll(`${selector}[data-action="team"]`);

        this.init();
    }

    init() {
        this.fashions.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.sendFashion(e.currentTarget.dataset.id);
        }));

        this.teams.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.sendTeam(e.currentTarget.dataset.id);
        }));
    }

    sendFashion(id) {

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

    sendTeam(id) {

        $.ajax({
            dataType: "json",
            type: "POST",
            url: '/php/team.php',
            data: {
                id: id
            },
            success: function (result) {
                if (result.status) {
                    $.fancybox.open(result.html);
                } else {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            },
            error: function (result) {
                alert('Что-то пошло не так, попробуйте еще раз!!!');
            }
        });
    }

}