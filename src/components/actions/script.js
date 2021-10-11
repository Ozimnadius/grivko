//- components/actions
window.addEventListener('load', function () {
    new Actions('.jsAction');
});

class Actions {
    constructor(selector, props) {

        this.fashions = document.querySelectorAll(`${selector}[data-action="fashion"]`);
        this.teams = document.querySelectorAll(`${selector}[data-action="team"]`);
        this.calls = document.querySelectorAll(`${selector}[data-action="call"]`);
        this.addReview = document.querySelectorAll(`${selector}[data-action="addReview"]`);
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

        this.calls.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.openForm("formCall");
            this.current.validate(
                {
                    rules: {
                        tel: "required",
                    },
                    messages: {
                        tel: "Введите ваш  Телефон",
                    },
                    submitHandler: function (form) {
                        let formData = new FormData(form);
                        $.ajax({
                            type: 'POST',
                            url: $(form).attr('action'),
                            data: formData,
                            dataType: 'json',
                            success: function (result) {
                                debugger;
                                if (result.status) {
                                    template.close();
                                    template.open("formThanks");
                                } else {
                                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                                }
                            },
                            error: function (result) {
                                alert('Что-то пошло не так, попробуйте еще раз!!!');
                            }
                        });
                    },
                    invalidHandler: function (event, validator) {
                        // debugger;
                    },
                    errorPlacement: function (error, element) {
                        element[0].placeholder = error[0].innerText;
                    }
                }
            );
        }));

        this.addReview.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.openForm("formReview");
            const files = new Files();
            this.current.validate(
                {
                    rules: {
                        msg: "required",
                    },
                    messages: {
                        msg: "Напишите ваш отзыв",
                    },

                    submitHandler: function (form) {
                        let formData = new FormData(form);

                        $.ajax({
                            type: 'POST',
                            url: $(form).attr('action'),
                            data: formData,
                            dataType: 'json',
                            cache: false,
                            contentType: false,
                            processData: false,
                            success: function (result) {
                                if (result.status) {
                                    template.close();
                                    template.open("formReviewThanks");
                                } else {
                                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                                }
                            },
                            error: function (result) {
                                alert('Что-то пошло не так, попробуйте еще раз!!!');
                            }
                        });
                    },
                    invalidHandler: function (event, validator) {
                        // debugger;
                    },
                    errorPlacement: function (error, element) {
                        element[0].placeholder = error[0].innerText;
                        // debugger;
                    }
                }
            );
        }));
    }

    get current(){
        return template.current;
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

    openForm(name) {
        template.open(name);
    }

}