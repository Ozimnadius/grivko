//USER

//COMPONENTS


// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    }
};

window.addEventListener("load", function (){

    $('.input[type="tel"]').inputmask("+7(999)999-99-99");


    $(".file input").on("change", function (e){
        $(this).closest('.file').find('.file__name').text(this.files[0].name);
    });

});

window.addEventListener('load', function () {
    new Actions('.jsAction');
});

class Actions {
    constructor(selector, props) {

        this.fashions = document.querySelectorAll(`${selector}[data-action="fashion"]`);

        this.init();
    }

    init() {
        this.fashions.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.sendFashion(e.currentTarget.dataset.id);
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

}
//revs.js
window.addEventListener("load", function (){

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
//choose.js
window.addEventListener("load", function () {

    class Check {
        constructor() {
            this.nav = $(".choose__nav");
            this.inputus = $(".choose-slide__input");

            this.inputus.on("change", () => {
                this.activateNav();
            });
        }

        check(slide) {

            if (!slide.find('.choose-slide__input:checked').length > 0) {
                this.deactivateNav();
            } else {
                this.activateNav();
            }
        }

        activateNav() {
            this.nav.removeClass("disabled");
        }

        deactivateNav() {
            this.nav.addClass("disabled");
        }
    }

    let test = new Check();

    const chooseSwiper = new Swiper('.choose__swiper', {
        // initialSlide: 5,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: false,
        // Navigation arrows
        navigation: {
            nextEl: '.choose__next',
            prevEl: '.choose__prev',
        },
        // If we need pagination
        pagination: {
            el: '.choose__pag',
        },
        // onAny(eventName,...args){
        //     console.log(eventName);
        // },
        on: {
            init: function () {
                let $slide = $(this.slides[this.activeIndex]),
                    $checked = $slide.find('.choose-slide__input:checked');
                test.check($slide);

            },
            slideChange: function () {
                let $slide = $(this.slides[this.activeIndex]),
                    $checked = $slide.find('.choose-slide__input:checked');

                test.check($slide);


            }
        }
    });


});
//filters.js
window.addEventListener("load", function () {

    document.querySelectorAll('.jsFilter').forEach(function (i) {
        new Filter(i);
    });

});

class Filter {

    constructor(elem) {
        this.filter = elem;
        this.drop = this.filter.querySelector('.filter__drop');
        this.view = this.filter.querySelector('.jsFilter__view');
        this.items = this.drop.querySelectorAll('.jsFilter__val');
        this.vals = this.drop.querySelectorAll('.jsFilter__val:checked');
        this.template = this.filter.querySelector('template').content;
        this.templateParent = this.template.querySelector('.filter-template__parent').cloneNode(true);
        this.templateChild = this.template.querySelector('.filter-template__item');
        this.btnAll = this.filter.querySelector('.jsFilter__all');
        this.init();
    }

    init() {
        $(this.filter).hover(this.slideDown, this.slideUp);
        this.renderView();

        this.items.forEach((i) => {
            i.addEventListener('change', this.renderView);
        });

        if (this.btnAll) {
            this.btnAll.addEventListener('click', this.selectAll);
        }
    }

    selectAll=()=>{
        this.items.forEach((i)=>this.setChecked(i));
        this.renderView();
    }

    setChecked=(el)=>{
        el.checked = true;
    }

    renderView = () => {
        this.updateVals();

        this.view.innerHTML = "";
        this.templateParent.innerHTML = "";

        this.vals.forEach((e) => {
            let item = this.templateChild.cloneNode(true);
            let html = item.outerHTML.replace("{{val}}", e.value);

            this.templateParent.insertAdjacentHTML("beforeend", html);
        });

        this.view.append(this.templateParent);
    }

    updateVals() {
        this.vals = this.drop.querySelectorAll('.jsFilter__val:checked');
    }

    get getDropHeight() {
        return this.drop.querySelector('.filter-drop').offsetHeight;
    }

    slideDown = () => {
        this.drop.style.height = `${this.getDropHeight}px`;
    }

    slideUp = () => {
        this.drop.style.height = "0px";
    }

}
//faq.js
window.addEventListener("load", function () {

    let items = document.querySelectorAll('.jsFaq');

    if (items.length>0){
        items.forEach(i=>new Faq(i));
    }
});

class FaqItem {
    constructor(elem) {
        this.item = elem;
        this.wrap = this.item.querySelector(".jsFaq__wrap");
        this.content = this.item.querySelector(".jsFaq__content");
        this.active = false;
        this.init();
    }

    init(){
        this.item.addEventListener('click',this.click)
    }

    get height() {
        return this.content.offsetHeight;
    }

    click = () => {
        if (this.active) {
            this.close();
        } else {
            this.open();
        }
    }

    open = () => {
        this.active = true;
        this.wrap.style.height = `${this.height}px`;
        this.item.classList.add('active');
    }

    close = () => {
        this.active = false;
        this.wrap.style.height = `0px`;
        this.item.classList.remove('active');
    }
}

class Faq {
    constructor(obj) {
        this.faq = obj;
        this.elems = this.faq.querySelectorAll('.jsFaq__item');
        this.items = [];
        this.activeItem = undefined;
        this.init();
    }

    init() {
        this.elems.forEach((i) => this.items.push(new FaqItem(i)));
    }
}





//photo.js
window.addEventListener('load', function () {
    if(document.querySelector('.jsPhotos')) {
        let photos = new Photo();
    }
});

class Photo {
    constructor() {
        this.photos = document.querySelector('.jsPhotos');
        this.thumbs = this.photos.querySelectorAll('.jsThumb');
        this.photo = this.photos.querySelector('.jsPhoto');
        this.activeThumb = this.thumbs[0];
        this.init();
    }

    init() {
        this.activeThumb.classList.add("photo__thumb--active");
        this.photo.src = this.activeThumb.href;

        this.thumbs.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.setPhoto(e.currentTarget);
        }));
    }

    setPhoto(el) {
        if (this.activeThumb) {
            this.activeThumb.classList.remove("photo__thumb--active");
        }

        this.setActive(el);

        this.photo.src = this.activeThumb.href;
    }

    setActive(el) {
        this.activeThumb = el;
        this.activeThumb.classList.add("photo__thumb--active");
    }

}
window.addEventListener('load', function (){
    if(document.querySelector('.jsTabs')) {
        new Tabs();
    }
});

class Tabs{
    constructor() {
        this.tabs = document.querySelector(".jsTabs");
        this.btnsList = this.tabs.querySelectorAll('.jsTabs__btn');
        this.tabsList = this.tabs.querySelectorAll('.jsTabs__tab');
        this.activeIndex = 0;
        this.init();
    }

    init(){
        this.activate();
        this.btnsList.forEach(i=>i.addEventListener('click',this.click));
    }

    click=(e)=>{
        this.deactivate();
        this.activeIndex = Array.from(this.btnsList).indexOf(e.currentTarget);
        this.activate();
    }

    deactivate(){
        this.btnsList[this.activeIndex].classList.remove('active');
        this.tabsList[this.activeIndex].classList.remove('active');
    }

    activate(){
        this.btnsList[this.activeIndex].classList.add('active');
        this.tabsList[this.activeIndex].classList.add('active');
    }
}
// product-revs.js
window.addEventListener('load', function () {
    if(document.querySelector('.jsRevs')) {
        const revs = new Revs();
    }

    // $.fancybox.open(formReview.content);
    //
    // let myDropzone = new Dropzone(".call-photos__list", {
    //     url: "/php/review.php",
    //     paramName: "file",
    //     thumbnailWidth: 70,
    //     thumbnailHeight: 70,
    //     thumbnailMethod: "contain"
    // });
});

class Revs {
    constructor() {
        this.revs = document.querySelector('.jsRevs');
        this.hiddens = {
            items: this.revs.querySelectorAll('.jsRev[data-more]'),
            open: false,
            btn: this.revs.querySelector('.jsRevs__more')
        };
        this.init();
    }

    init() {
        this.hiddens.btn.addEventListener('click', this.hiddensBtnClick);
    }

    hiddensBtnClick = () => {
        if (this.hiddens.open) {
            this.hiddensHide();
        } else {
            this.hiddensShow();
        }
    }

    hiddensShow() {
        this.hiddens.items.forEach(i => i.hidden = false);
        this.hiddens.btn.classList.add('active');
        this.hiddens.btn.firstElementChild.innerText = "Скрыть";
        this.hiddens.open = true;
    }

    hiddensHide() {
        this.hiddens.items.forEach(i => i.hidden = true);
        this.hiddens.btn.classList.remove('active');
        this.hiddens.btn.firstElementChild.innerText = "Все отзывы";
        this.hiddens.open = false;
    }


}
//# sourceMappingURL=script.js.map