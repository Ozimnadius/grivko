<?php
header('Content-Type: application/json');

echo json_encode(array(
    'status' => true,
    'html' => getHtml()
));
exit();

function getHtml()
{
    ob_start();
    ?>
    <div class="fashion-card shoes-card fancybox-webcomp">
        <div class="fashion-card__grid">
            <div class="fashion-card__left">
                <div class="fashion-card__slider">
                    <div class="swiper-container fashion-card__swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide fashion-card__slide">
                                <img src="/images/content/men/services/shoes/card/img.jpg" alt="lorem">
                            </div>
                            <div class="swiper-slide fashion-card__slide">
                                <img src="/images/content/men/services/shoes/card/img.jpg" alt="lorem">
                            </div>
                            <div class="swiper-slide fashion-card__slide">
                                <img src="/images/content/men/services/shoes/card/img.jpg" alt="lorem">
                            </div>

                        </div>
                    </div>
                    <div class="fashion-card__pag"></div>
                </div>
            </div>
            <div class="fashion-card__right">
                <h3 class="fashion-card__title title">Оксворды</h3>
                <div class="fashion-card__txt">Элегантное платье-футляр с V-образным вырезом без рукавов. За счет
                    завышенной талии выигрышно подчеркнет женскую фигуру. Такое платье будет идеально смотреться как
                    отдельный элемент гардероба, так и в комплекте с жакетом.
                </div>
                <div class="fashion-card__price">от 75 000 руб.</div>
                <button class="fashion-card__consult product-btns__consultation btn btn--black btn--revers product-btns__item" type="button">
                    <svg width="26" height="26" viewBox="0 0 26 26"xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.105 3.778C19.8946 1.56955 16.9571 0.239398 13.8392 0.035096C10.7212 -0.169206 7.63529 0.766254 5.1556 2.66739C2.67591 4.56852 0.971394 7.30582 0.359267 10.3699C-0.252861 13.4339 0.269096 16.616 1.828 19.324L0 26L6.83 24.208C8.71904 25.237 10.8359 25.7761 12.987 25.776H12.992C15.5405 25.7752 18.0316 25.019 20.1505 23.6028C22.2693 22.1866 23.9207 20.1741 24.896 17.8195C25.8713 15.465 26.1267 12.8742 25.63 10.3746C25.1332 7.87492 23.9065 5.57865 22.105 3.776V3.778ZM12.992 23.6C11.0744 23.5997 9.19206 23.084 7.542 22.107L7.15 21.876L3.093 22.939L4.175 18.987L3.92 18.582C2.65853 16.5709 2.10112 14.1977 2.33538 11.8353C2.56964 9.47298 3.58229 7.25544 5.21415 5.53129C6.84601 3.80715 9.00455 2.67416 11.3505 2.31043C13.6964 1.9467 16.0967 2.37285 18.174 3.52189C20.2514 4.67093 21.888 6.47771 22.8266 8.65822C23.7652 10.8387 23.9526 13.2693 23.3594 15.568C22.7661 17.8666 21.4258 19.9029 19.5492 21.3568C17.6725 22.8107 15.3659 23.5998 12.992 23.6V23.6ZM18.866 15.58C18.544 15.419 16.966 14.64 16.666 14.533C16.366 14.426 16.156 14.372 15.942 14.694C15.728 15.016 15.11 15.741 14.923 15.956C14.736 16.171 14.548 16.198 14.223 16.037C13.2736 15.6582 12.3974 15.1168 11.634 14.437C10.9302 13.7861 10.3267 13.0347 9.843 12.207C9.655 11.885 9.843 11.727 9.984 11.55C10.2777 11.2038 10.5451 10.8361 10.784 10.45C10.8268 10.3612 10.8468 10.2631 10.8421 10.1646C10.8374 10.0661 10.8081 9.97032 10.757 9.886C10.677 9.725 10.033 8.14 9.765 7.496C9.51 6.869 9.25 6.954 9.05 6.944C8.85 6.934 8.65 6.933 8.433 6.933C8.26997 6.93681 8.10949 6.97431 7.96166 7.04315C7.81383 7.11199 7.68184 7.21068 7.574 7.333C7.21009 7.67851 6.92219 8.09608 6.72866 8.55906C6.53514 9.02205 6.44023 9.52029 6.45 10.022C6.55462 11.2362 7.01129 12.3935 7.764 13.352C9.14487 15.4218 11.0402 17.0969 13.264 18.213C13.8632 18.4713 14.4758 18.6976 15.099 18.891C15.7558 19.0908 16.4502 19.1347 17.127 19.019C17.5752 18.9275 17.9997 18.7442 18.3736 18.4808C18.7476 18.2173 19.063 17.8793 19.3 17.488C19.5108 17.007 19.5761 16.4747 19.488 15.957C19.408 15.823 19.188 15.742 18.871 15.581L18.866 15.58Z" />
                    </svg>
                    <span>Получить консультацию</span>
                </button>
                <form action="/php/shoesSend.php" class="fashion-card__form fashion-form">
                    <div class="fashion-form__title">записаться на снятие мерок</div>
                    <div class="fashion-form__fields">
                        <div class="fashion-form__field">
                            <input class="input" type="text" name="name" placeholder="Имя" data-rule-required="true" data-msg-required="Заполните Имя">
                        </div>
                        <div class="fashion-form__field">
                            <input class="input" type="tel" name="tel" placeholder="Телефон" data-rule-required="true" data-msg-required="Заполните телефон" data-msg-tel="Заполните телефон">
                        </div>
                        <div class="fashion-form__field">
                            <input class="input" type="text" name="date" placeholder="Напишите удобный день и время">
                        </div>
                    </div>
                    <button type="submit" class="btn btn--black fashion-form__submit">
                        <span>Отправить заявку</span>
                        <svg width="26" height="9" viewBox="0 0 26 9" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.271 3.758L21.683 0.17C21.5744 0.0613939 21.4271 0.00037956 21.2735 0.000379562C21.1199 0.000379565 20.9726 0.0613939 20.864 0.17C20.7554 0.278606 20.6944 0.425908 20.6944 0.5795C20.6944 0.733092 20.7554 0.880394 20.864 0.989L23.464 3.589H0.579C0.425307 3.589 0.277909 3.65005 0.169232 3.75873C0.0605546 3.86741 -0.000499725 4.01481 -0.000499725 4.1685C-0.000499725 4.32219 0.0605546 4.46959 0.169232 4.57827C0.277909 4.68695 0.425307 4.748 0.579 4.748H23.463L20.863 7.348C20.7544 7.45661 20.6934 7.60391 20.6934 7.7575C20.6934 7.91109 20.7544 8.05839 20.863 8.167C20.9716 8.27561 21.1189 8.33662 21.2725 8.33662C21.4261 8.33662 21.5734 8.27561 21.682 8.167L25.27 4.579C25.3242 4.52526 25.3672 4.46135 25.3965 4.39094C25.4259 4.32053 25.4411 4.245 25.4412 4.16871C25.4413 4.09241 25.4263 4.01685 25.3971 3.94637C25.3679 3.87589 25.325 3.81187 25.271 3.758V3.758Z"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
    <script>
        $('.input[type="tel"]').inputmask("+7(999)999-99-99");
        const slider = new Swiper('.fashion-card__swiper', {
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: '.fashion-card__pag',
            },
        });
        $(".fashion-form").validate(
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
                                template.open("formOrderThanks");
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
    </script>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}