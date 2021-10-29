//- components/actions
window.addEventListener('load', function () {
    new Actions('.jsAction');
});

class Actions {
    constructor(selector, props) {

        this.addReview = document.querySelectorAll(`${selector}[data-action="addReview"]`);

        this.validateForms = document.querySelectorAll(`${selector}[data-action="validate"]`);

        this.ajaxForms = document.querySelectorAll(`${selector}[data-action="openAjaxForm"]`);

        this.templateForms = document.querySelectorAll(`${selector}[data-action="openForm"]`);

        this.init();
    }

    init() {

        this.addReview.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            template.open("formReview",{touch:false});
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

        this.validateForms.forEach((i) => this.validate(i));

        this.ajaxForms.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.openAjaxForm(e.currentTarget.dataset);
        }));

        this.templateForms.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.openTemplateForm(e.currentTarget.dataset);
        }));

    }

    validate(form) {
        $(form).validate(
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
                                if (form.dataset.reset) {
                                    form.reset();
                                }
                                template.open(form.dataset.successForm);
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
    }

    get current() {
        return template.current;
    }

    openAjaxForm(dataset) {
        $.ajax({
            dataType: "json",
            type: "POST",
            url: dataset.ajax,
            data: {
                id: dataset.id
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

    openTemplateForm(dataset) {
        this.openForm(dataset.form);
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
                                template.open(dataset.successForm);
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
    }

    openForm(name) {
        template.open(name);
    }

}