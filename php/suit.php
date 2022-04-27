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
    <div class="fashion-card suit-card fancybox-webcomp">
        <div class="suit-card__grid">
            <div class="suit-card__left">
                <div class="suit-card__left-grid">
                    <div class="suit-card__left-left">
                        <div class="suit-card__img">
                            <img src="/images/content/suit-card/img.jpg" alt="">
                        </div>
                    </div>
                    <div class="suit-card__left-right">
                        <div class="suit-card__title">Luxury</div>
                        <div class="suit-card__price">от 190 000р.</div>
                        <ul class="suit-card__ul">
                            <li class="suit-card__li">Машинный пошив (4 недели)</li>
                            <li class="suit-card__li">Ткани Mauro Prato с индексом 130’s</li>
                            <li class="suit-card__li">Полная канва</li>
                            <li class="suit-card__li">Монограмма</li>
                            <li class="suit-card__li">Индивидуальный принт на подкладе</li>
                            <li class="suit-card__li">Летний вариант без подклада</li>
                            <li class="suit-card__li">Ручная работа 50%</li>
                        </ul>
                    </div>
                </div>
                <div class="suit-card__left-bottom">
                    <div class="suit-card__sub">Лимитированные коллекции тканей:</div>
                    <div class="suit-card__txt">Loro Piana, Scabal, Dormeuil, Holland & Sherry, Zegna, Drago, VBC с индексом 120 – 270’s</div>
                </div>
            </div>
            <div class="suit-card__right">
                <div class="suit-card__content content">
                    <h4>Описание:</h4>
                    <p>
                        В рамках номинала подарка обладатель сертификата может выбрать готовый костюм подходящего размера из коллекции бутика, либо заказать индивидуальный пошив изделия в пределах оплаченной дарителем суммы.
                    </p>
                    <p>
                        В бутик-ателье Mauro Prato представлено более 600 образцов шерстяных тканей с кручением нити Super 100’s – 140’s — такие ткани идеально подойдут для пошива повседневного классического костюма. С помощью нашего профессионального стилиста обладатель сертификата сможет выбрать ту ткань, которая подойдет именно ему. Стилист также подскажет какой дизайн костюма выбрать, поможет подобрать пуговицы, подкладку и другие немаловажные детали, которые определяют индивидуальность владельца.
                    </p>
                    <p>
                        На наших фабриках работают мастера с высоким уровнем профессионализма, преданные своему делу. Обратившись в наше ателье, можно быть уверенным, что заказанный классический костюм будет выполнен безукоризненно.
                    </p>
                </div>
                <button type="button" class="suit-card__send jsAction btn btn--gold-fill">
                    Отправить заявку
                </button>
            </div>
        </div>
        <div class="suit-card__bottom">
            <ul class="suit-card__list">
                <li class="suit-card__item">Эксклюзивный дизайн</li>
                <li class="suit-card__item">Гарантия посадки по фигуре</li>
                <li class="suit-card__item">Возможность выезда стилиста</li>
            </ul>
        </div>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}