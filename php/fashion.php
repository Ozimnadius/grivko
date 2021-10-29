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
    <div class="fashion-card fancybox-webcomp">
        <div class="fashion-card__grid">
            <div class="fashion-card__left">
                <div class="fashion-card__slider">
                    <div class="swiper-container fashion-card__swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide fashion-card__slide">
                                <img src="/images/content/fashion/slide.jpg" alt="lorem">
                            </div>
                            <div class="swiper-slide fashion-card__slide">
                                <img src="/images/content/fashion/slide.jpg" alt="lorem">
                            </div>
                            <div class="swiper-slide fashion-card__slide">
                                <img src="/images/content/fashion/slide.jpg" alt="lorem">
                            </div>

                        </div>
                    </div>
                    <div class="fashion-card__nav">
                        <a href="#" class="fashion-card__arr fashion-card__prev">
                            <svg width="26" height="9" viewBox="0 0 26 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.170002 4.577L3.758 8.165C3.86661 8.27361 4.01391 8.33462 4.1675 8.33462C4.32109 8.33462 4.4684 8.27361 4.577 8.165C4.68561 8.05639 4.74662 7.90909 4.74662 7.7555C4.74662 7.60191 4.68561 7.45461 4.577 7.346L1.977 4.746L24.862 4.746C25.0157 4.746 25.1631 4.68495 25.2718 4.57627C25.3804 4.46759 25.4415 4.32019 25.4415 4.1665C25.4415 4.01281 25.3804 3.86541 25.2718 3.75673C25.1631 3.64806 25.0157 3.587 24.862 3.587L1.978 3.587L4.578 0.987001C4.68661 0.878395 4.74762 0.731093 4.74762 0.577501C4.74762 0.423909 4.68661 0.276607 4.578 0.168001C4.46939 0.059395 4.3221 -0.00161934 4.1685 -0.00161934C4.01491 -0.00161934 3.86761 0.059395 3.759 0.168001L0.171001 3.756C0.116845 3.80974 0.0738437 3.87365 0.0444679 3.94406C0.0150921 4.01448 -7.87333e-05 4.09 -0.000171661 4.16629C-0.00026459 4.24259 0.0147221 4.31815 0.0439262 4.38863C0.0731304 4.45911 0.115976 4.52313 0.170002 4.577V4.577Z"/>
                            </svg>
                        </a>
                        <a href="#" class="fashion-card__arr fashion-card__next">
                            <svg width="26" height="9" viewBox="0 0 26 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.271 3.758L21.683 0.169998C21.5744 0.0613919 21.4271 0.000377652 21.2735 0.000377655C21.1199 0.000377658 20.9726 0.061392 20.864 0.169998C20.7554 0.278604 20.6944 0.425906 20.6944 0.579498C20.6944 0.73309 20.7554 0.880392 20.864 0.988998L23.464 3.589H0.579C0.425307 3.589 0.277909 3.65005 0.169232 3.75873C0.0605546 3.86741 -0.000499725 4.01481 -0.000499725 4.1685C-0.000499725 4.32219 0.0605546 4.46959 0.169232 4.57827C0.277909 4.68694 0.425307 4.748 0.579 4.748H23.463L20.863 7.348C20.7544 7.4566 20.6934 7.60391 20.6934 7.7575C20.6934 7.91109 20.7544 8.05839 20.863 8.167C20.9716 8.2756 21.1189 8.33662 21.2725 8.33662C21.4261 8.33662 21.5734 8.2756 21.682 8.167L25.27 4.579C25.3242 4.52526 25.3672 4.46135 25.3965 4.39094C25.4259 4.32052 25.4411 4.245 25.4412 4.16871C25.4413 4.09241 25.4263 4.01685 25.3971 3.94637C25.3679 3.87589 25.325 3.81187 25.271 3.758V3.758Z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="fashion-card__pag"></div>
                </div>
            </div>
            <div class="fashion-card__right">
                <h3 class="fashion-card__title title">Вы можете заказать: Пиджак, Брюки </h3>
                <div class="fashion-card__txt">Выбирая современный деловой образ, основной акцент стоит сделать на двух
                    составляющих: фактуре вещей и их нетривиальных силуэтах
                </div>
                <div class="fashion-card__list catalog__list fashion-card__list">
                    <div class="catalog__item fashion-card__item">
                        <a href="" class="item item--hover">
                            <span class="item__wrap">
                                <span class="item__img">
                                    <span class="item__img-wrap">
                                        <img src="/images/content/women/collections/9.jpg" alt="lorem">
                                    </span>
                                </span>
                                <span class="title item__title">Пиджак</span>
                                <span class="item__price">от 75 000 руб.</span>
                                <span class="item__btn">
                                    <span>Перейти</span>
                                    <svg width="26" height="9" viewBox="0 0 26 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.271 3.75811L21.683 0.170109C21.5744 0.0615026 21.4271 0.000488279 21.2735 0.000488281C21.1199 0.000488284 20.9726 0.0615026 20.864 0.170109C20.7554 0.278715 20.6944 0.426016 20.6944 0.579609C20.6944 0.733201 20.7554 0.880503 20.864 0.989109L23.464 3.58911H0.579012C0.425319 3.58911 0.277921 3.65016 0.169243 3.75884C0.060566 3.86752 -0.000488281 4.01492 -0.000488281 4.16861C-0.000488281 4.3223 0.060566 4.4697 0.169243 4.57838C0.277921 4.68705 0.425319 4.74811 0.579012 4.74811H23.463L20.863 7.34811C20.7544 7.45671 20.6934 7.60402 20.6934 7.75761C20.6934 7.9112 20.7544 8.0585 20.863 8.16711C20.9716 8.27571 21.1189 8.33673 21.2725 8.33673C21.4261 8.33673 21.5734 8.27571 21.682 8.16711L25.27 4.57911C25.3242 4.52537 25.3672 4.46146 25.3965 4.39105C25.4259 4.32063 25.4411 4.24511 25.4412 4.16882C25.4413 4.09252 25.4263 4.01696 25.3971 3.94648C25.3679 3.876 25.325 3.81198 25.271 3.75811V3.75811Z"/>
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div class="catalog__item fashion-card__item">
                        <a href="" class="item item--hover">
                            <span class="item__wrap">
                                <span class="item__img">
                                    <span class="item__img-wrap">
                                        <img src="/images/content/women/collections/10.jpg" alt="lorem">
                                    </span>
                                </span>
                                <span class="title item__title">Брюки</span>
                                <span class="item__price">от 75 000 руб.</span>
                                <span class="item__btn">
                                    <span>Перейти</span>
                                    <svg width="26" height="9" viewBox="0 0 26 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.271 3.75811L21.683 0.170109C21.5744 0.0615026 21.4271 0.000488279 21.2735 0.000488281C21.1199 0.000488284 20.9726 0.0615026 20.864 0.170109C20.7554 0.278715 20.6944 0.426016 20.6944 0.579609C20.6944 0.733201 20.7554 0.880503 20.864 0.989109L23.464 3.58911H0.579012C0.425319 3.58911 0.277921 3.65016 0.169243 3.75884C0.060566 3.86752 -0.000488281 4.01492 -0.000488281 4.16861C-0.000488281 4.3223 0.060566 4.4697 0.169243 4.57838C0.277921 4.68705 0.425319 4.74811 0.579012 4.74811H23.463L20.863 7.34811C20.7544 7.45671 20.6934 7.60402 20.6934 7.75761C20.6934 7.9112 20.7544 8.0585 20.863 8.16711C20.9716 8.27571 21.1189 8.33673 21.2725 8.33673C21.4261 8.33673 21.5734 8.27571 21.682 8.16711L25.27 4.57911C25.3242 4.52537 25.3672 4.46146 25.3965 4.39105C25.4259 4.32063 25.4411 4.24511 25.4412 4.16882C25.4413 4.09252 25.4263 4.01696 25.3971 3.94648C25.3679 3.876 25.325 3.81198 25.271 3.75811V3.75811Z"/>
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="fashion-card__arts">
                    <div class="fashion-card__art">Юбка, арт.: 15936744-001</div>
                    <div class="fashion-card__art">Жакет, арт.: 15934841-001</div>
                </div>
            </div>
        </div>
    </div>
    <script>
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
    </script>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}