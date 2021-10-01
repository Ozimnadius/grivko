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




