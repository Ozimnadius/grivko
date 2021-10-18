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

    $(".subscribe-file input").on("change", function (e){
        $(this).closest('.subscribe-file').find('.subscribe-file__name').text(this.files[0].name);
    });

});

//- nav-fashions.js
window.addEventListener('load', function () {
    document.querySelectorAll('.nav-fashions').forEach(i => new Fashion(i));

});

class Fashion {
    constructor(el) {
        this.fashion = el;
        this.sws = this.fashion.querySelectorAll('.nav-fashions__sw');
        this.tabs = this.fashion.querySelectorAll('.nav-fashions__tab');
        this.activeIndex = 0;

        this.init();
    }

    init() {
        this.sws.forEach((sw) => {
            $(sw).hover((e) => {
                this.activate(Array.from(this.sws).indexOf(e.currentTarget));
            });
        });
    }

    activate(x) {
        this.remove();
        this.activeIndex = x;
        this.add();
    }

    add(){
        this.sws[this.activeIndex].classList.add("active");
        this.tabs[this.activeIndex].classList.add("active");
    }

    remove(){
        this.sws[this.activeIndex].classList.remove("active");
        this.tabs[this.activeIndex].classList.remove("active");
    }

}
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
    if (document.querySelector('.jsRevs')) {
        const revs = new Revs();
    }

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
//- content.js
window.addEventListener('load', function () {
    document.querySelectorAll('.content table').forEach(i => new Table(i));
});

class Table {
    constructor(el) {
        this.table = el;
        this.names = Array.from(this.table.querySelectorAll('th')).map(i => i.innerText);
        this.trs = this.table.querySelectorAll('tbody tr');

        this.init();
        // console.log(this);
    }

    init() {
        this.trs.forEach((i => this.getCols(i)));
    }

    getCols = (i) => {
        i.querySelectorAll('td').forEach((i, x) => this.setName(i, x));
    }

    setName = (td, x) => {
        td.dataset.name = this.names[x];
    }


}
window.addEventListener('load', function () {


});

class Template {
    constructor() {
        this.content = document.querySelector('#templates').content;
    }

    html(name) {
        return this.content.querySelector(`#${name}`).innerHTML;
    }

    close() {
        $.fancybox.close();
    }

    open(name) {
        $.fancybox.open(this.html(name));
        $('.input[type="tel"]').inputmask("+7(999)999-99-99");
    }

    get current() {
        return $.fancybox.getInstance().current.$content;
    }
}

const template = new Template();

class Files {
    constructor() {
        this.files = document.querySelector('.files');
        this.btn = this.files.querySelector('.files__plus');
        this.input = undefined;
        this.list = this.files.querySelector('.files__list');
        this.fileList = undefined;
        this.index = 0;
        this.init();
    }

    init() {
        this.addInput();

        this.input.addEventListener('change', (e) => {
            this.fileList = e.currentTarget.files;
            this.addFiles();
        })

        this.btn.addEventListener('click', (e) => {
            this.input.click();
        });
    }

    addInput() {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'file');
        this.input.setAttribute('multiple', true);
        this.input.setAttribute('accept', 'image/*');
    }

    html() {
        const tmp = document.querySelector('#file').content;
        return tmp.querySelector('.file__item').cloneNode(true);
    }

    createImg(file) {
        const img = document.createElement("img");
        img.src = window.URL.createObjectURL(file);
        img.onload = function () {
            window.URL.revokeObjectURL(this.src);
        }
        return img;
    }

    addFiles() {

        Array.from(this.fileList).forEach((i) => {
            let item = this.html();
            let img = this.createImg(i);
            item.querySelector('.file__img').appendChild(img);
            let input = item.querySelector('.file__input');
            input.name = `file[${this.index}]`;
            let dt = new DataTransfer();
            dt.items.add(new File([i], i.name, {type: i.type}));
            let file_list = dt.files;
            input.files = file_list;
            this.list.appendChild(item);
            this.index++;

            item.addEventListener('click', function (e) {
                this.remove();
            });
        });
    }
}
window.addEventListener('load', function (){
    const mmenu = new Mmenu();
});

class Mmenu{

    constructor(obj){
        let def = {
            menu: '.mmenu',
            menuItem: '.mmenu__item',
            menuOpen: '.jsMenuOpen',
            menuClose: '.jsMenuClose',
            submenu: '.submmenu',
            submenuOpen: '.jsSubmenuOpen',
            submenuClose: '.jsSubmenuClose'
        };

        let settings = Object.assign(def,obj);

        this.menu = document.querySelector(settings.menu);
        this.menuOpen = document.querySelectorAll(settings.menuOpen);
        this.menuClose = document.querySelectorAll(settings.menuClose);
        this.submenus = document.querySelectorAll(settings.submenu);
        this.submenuOpen = document.querySelectorAll(settings.submenuOpen);
        this.submenuClose = document.querySelectorAll(settings.submenuClose);

        for (let i = 0; i < this.menuOpen.length; i++) {
            this.menuOpen[i].addEventListener('click', ()=>{this.open()});
        }
        for (let i = 0; i < this.menuClose.length; i++) {
            this.menuClose[i].addEventListener('click', ()=>{this.close()});
        }

        for (let i = 0; i < this.submenuOpen.length; i++) {
            let btn = this.submenuOpen[i];
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                e.stopPropagation();
                let item =  e.currentTarget.closest('.mmenu__item'),
                    submenu = item.querySelector(settings.submenu);
                this.openSubmenu(submenu)
            });
        }
        for (let i = 0; i < this.submenuClose.length; i++) {
            let btn = this.submenuClose[i];
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                e.stopPropagation();
                let submenu =  e.currentTarget.closest(settings.submenu);
                this.closeSubmenu(submenu)
            });
        }

        document.addEventListener('click',  (e)=> {
            let target = e.target;

            if (!target.closest(settings.menu) && !target.closest(settings.menuOpen)) {
                this.close();
            }

        });
    }

    open(){
        this.menu.classList.add('active');
        document.querySelector('body').classList.add('ovh');
    }

    close() {
        this.menu.classList.remove('active');
        document.querySelector('body').classList.remove('ovh');

        for (let i=0;i<this.submenus.length;i++){
            this.closeSubmenu(this.submenus[i]);
        }
    }

    openSubmenu(submenu){
        submenu.classList.add('active');
    }

    closeSubmenu(submenu){
        submenu.classList.remove('active');
    }


}


//# sourceMappingURL=script.js.map