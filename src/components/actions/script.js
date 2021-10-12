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
        this.order = document.querySelectorAll(`${selector}[data-action="order"]`);
        this.subscribe = document.querySelectorAll(`${selector}[data-action="subscribe"]`);
        this.sign = document.querySelectorAll(`${selector}[data-action="sign"]`);
        this.choose = document.querySelectorAll(`${selector}[data-action="choose"]`);

        this.validateForms = [
            {
                list: this.subscribe,
                name: "formSubscribeThanks",
                reset: true
            },
            {
                list: this.sign,
                name: "formThanks",
                reset: true
            },
            {
                list: this.choose,
                name: "formThanks",
                reset: false
            },
        ];


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
                    submitHandler: function (form) {
                        let data = $(form).serialize();

                        $.ajax({
                            dataType: "json",
                            type: "POST",
                            url: '/php/call.php',
                            data: data,
                            success: function (result) {
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

        this.order.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.getOrder(e.currentTarget.dataset.id);

        }));

        this.validateForms.forEach(i => this.validate(i));

    }

    validate(obj) {
        obj.list.forEach((i) => {
            $(i).validate(
                {
                    submitHandler: function (form) {
                        let data = $(form).serialize();
                        let formData = new FormData(form);

                        $.ajax({
                            dataType: "json",
                            type: "POST",
                            url: form.action,
                            data: formData,
                            cache: false,
                            contentType: false,
                            processData: false,
                            success: function (result) {
                                if (result.status) {
                                    if (obj.reset) {
                                        form.reset();
                                    }
                                    template.open(obj.name);
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
        });
    }

    get current() {
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

    getOrder(id) {

        $.ajax({
            dataType: "json",
            type: "POST",
            url: '/php/order.php',
            data: {
                id: id
            },
            success: function (result) {
                if (result.status) {
                    template.close();
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