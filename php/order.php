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
    <form class="order" action="/php/call.php" method="post">
        <input type="hidden" name="id" value="99">
        <div class="order__grid">
            <div class="order__left">
                <h3 class="call__title title order__title">оформление заказа</h3>
                <div class="order__info">
                    <div class="order-info">
                        <div class="order-info__left">
                            <div class="order-info__img"><img src="/images/content/women/collections/product/img1.jpg"
                                                              alt="lorem"></div>
                        </div>
                        <div class="order-info__right">
                            <div class="order-info__title">КОСТЮМ-ТРОЙКА</div>
                            <div class="order-info__chars">
                                <div class="order-info__char">Стандарт размера:&nbsp;<b>US</b></div>
                                <div class="order-info__char">Размер:&nbsp;<b>38</b></div>
                                <div class="order-info__char">Рост:&nbsp;<b>168 - 175</b></div>
                            </div>
                            <div class="order-info__price">
                                <div class="order-info__price-name">Стоимость:</div>
                                <div class="order-info__price-val">$218.82</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order__sections">
                    <div class="order__section">
                        <div class="order-section">
                            <div class="order-section__name">Доставка:</div>
                            <div class="order-section__fields">
                                <div class="order-section__field">
                                    <label class="order-radio">
                                        <input class="order-radio__input" type="radio" name="delivery"
                                               value="Стандартная доставка" checked><span
                                                class="order-radio__fake"><span class="order-radio__left"><span
                                                        class="order-radio__round"></span></span><span
                                                    class="order-radio__right"><span class="order-radio__name">Стандартная доставка</span><span
                                                        class="order-radio__imgs"><span class="order-radio__img"><img
                                                                src="/images/content/order/post.png" alt="lorem"></span></span></span></span>
                                    </label>
                                </div>
                                <div class="order-section__field">
                                    <label class="order-radio">
                                        <input class="order-radio__input" type="radio" name="delivery"
                                               value="Экспресс доставка"><span class="order-radio__fake"><span
                                                    class="order-radio__left"><span
                                                        class="order-radio__round"></span></span><span
                                                    class="order-radio__right"><span class="order-radio__name">Экспресс доставка</span><span
                                                        class="order-radio__imgs"><span class="order-radio__img"><img
                                                                src="/images/content/order/cdek.png" alt="lorem"></span></span></span></span>
                                    </label>
                                </div>
                                <div class="order-section__field order-section__field--2">
                                    <label class="order-radio">
                                        <input class="order-radio__input" type="radio" name="delivery"
                                               value="Экспресс доставка доставка в любую точку мира"><span
                                                class="order-radio__fake"><span class="order-radio__left"><span
                                                        class="order-radio__round"></span></span><span
                                                    class="order-radio__right"><span class="order-radio__name">Экспресс доставка доставка в любую точку мира</span><span
                                                        class="order-radio__imgs"><span class="order-radio__img"><img
                                                                src="/images/content/order/dhl.png"
                                                                alt="lorem"></span><span class="order-radio__img"><img
                                                                src="/images/content/order/fedex.png"
                                                                alt="lorem"></span><span class="order-radio__img"><img
                                                                src="/images/content/order/pony.png" alt="lorem"></span></span></span></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order__section">
                        <div class="order-section">
                            <div class="order-section__name">Методы оплаты:</div>
                            <div class="order-section__fields">
                                <div class="order-section__field order-section__field--2">
                                    <div class="order-pays">
                                        <div class="order-pays__item">
                                            <label class="order-pay">
                                                <input class="order-pay__input" type="radio" name="pay"
                                                       value="Онлайн оплата" checked><span class="order-pay__fake"><span
                                                            class="order-pay__round"></span><span
                                                            class="order-pay__name">Онлайн оплата</span></span>
                                            </label>
                                        </div>
                                        <div class="order-pays__item">
                                            <label class="order-pay">
                                                <input class="order-pay__input" type="radio" name="pay"
                                                       value="Курьеру наличкой"><span class="order-pay__fake"><span
                                                            class="order-pay__round"></span><span
                                                            class="order-pay__name">Курьеру наличкой</span></span>
                                            </label>
                                        </div>
                                        <div class="order-pays__item">
                                            <label class="order-pay">
                                                <input class="order-pay__input" type="radio" name="pay"
                                                       value="Курьеру банковской картой"><span
                                                        class="order-pay__fake"><span
                                                            class="order-pay__round"></span><span
                                                            class="order-pay__name">Курьеру банковской картой</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order__right"><a class="order__conditions" href="#">Условия доставки / оплаты / возврата</a>
                <div class="order__cols">
                    <div class="order__col">
                        <div class="order__fields">
                            <label class="order__field"><span class="order__pin">Имя</span>
                                <input class="order__input" type="text" name="name" data-rule-required="true"
                                       data-msg-required="Заполните Имя">
                            </label>
                            <label class="order__field"><span class="order__pin">Телефон</span>
                                <input class="order__input" type="tel" name="tel" data-rule-required="true"
                                       data-msg-required="Заполните телефон" data-msg-tel="Заполните телефон">
                            </label>
                            <label class="order__field"><span class="order__pin">Эл. почта</span>
                                <input class="order__input" type="email" name="email" data-rule-required="true"
                                       data-msg-required="Заполните Email">
                            </label>
                            <label class="order__field"><span class="order__pin">Комментарий к заказу</span>
                                <textarea class="order__input order__input--area" name="comment"></textarea>
                            </label>
                        </div>
                    </div>
                    <div class="order__col">
                        <div class="order__fields">
                            <label class="order__field"><span class="order__pin">Страна</span>
                                <input class="order__input" type="text" name="country" data-rule-required="true"
                                       data-msg-required="Заполните Страну">
                            </label>
                            <label class="order__field"><span class="order__pin">Город</span>
                                <input class="order__input" type="text" name="city" data-rule-required="true"
                                       data-msg-required="Заполните Город">
                            </label>
                            <label class="order__field"><span class="order__pin">Улица</span>
                                <input class="order__input" type="text" name="street" data-rule-required="true"
                                       data-msg-required="Заполните Улицу">
                            </label>
                            <label class="order__field"><span class="order__pin">Подъезд / Этаж / Квартира</span>
                                <input class="order__input" type="" name="detail" data-rule-required="true"
                                       data-msg-required="Заполните Подъезд / Этаж / Квартира">
                            </label>
                            <label class="order__field"><span class="order__pin">Код домофона</span>
                                <input class="order__input" type="text" name="code">
                            </label>
                        </div>
                        <div class="order__policy">Нажимая на кнопку, вы принимаете<br><a href="#">политику
                                конфиденциальности</a></div>
                    </div>
                </div>
                <div class="order__bottom">
                    <div class="order__price">
                        <div class="order-price">
                            <div class="order-price__name">Итого:</div>
                            <div class="order-price__val">$218.82</div>
                        </div>
                    </div>
                    <button class="order__submit btn btn--black" type="submit"><span>Оплатить заказ</span>
                        <svg width="26" height="9" viewBox="0 0 26 9" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.271 3.758L21.683 0.169998C21.5744 0.0613919 21.4271 0.000377652 21.2735 0.000377655C21.1199 0.000377658 20.9726 0.061392 20.864 0.169998C20.7554 0.278604 20.6944 0.425906 20.6944 0.579498C20.6944 0.73309 20.7554 0.880392 20.864 0.988998L23.464 3.589H0.579C0.425307 3.589 0.277909 3.65005 0.169232 3.75873C0.0605546 3.86741 -0.000499725 4.01481 -0.000499725 4.1685C-0.000499725 4.32219 0.0605546 4.46959 0.169232 4.57827C0.277909 4.68694 0.425307 4.748 0.579 4.748H23.463L20.863 7.348C20.7544 7.4566 20.6934 7.60391 20.6934 7.7575C20.6934 7.91109 20.7544 8.05839 20.863 8.167C20.9716 8.2756 21.1189 8.33662 21.2725 8.33662C21.4261 8.33662 21.5734 8.2756 21.682 8.167L25.27 4.579C25.3242 4.52526 25.3672 4.46135 25.3965 4.39094C25.4259 4.32052 25.4411 4.245 25.4412 4.16871C25.4413 4.09241 25.4263 4.01685 25.3971 3.94637C25.3679 3.87589 25.325 3.81187 25.271 3.758V3.758Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </form>
    <script>
        $(".order").validate(
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