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