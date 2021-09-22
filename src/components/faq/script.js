//faq.js
window.addEventListener("load", function () {
    console.log("FAQ.JS");

    let faq = new Faq();

});

class FaqItem {
    constructor(elem) {
        this.item = elem;
        this.wrap = this.item.querySelector(".jsFaq__wrap");
        this.content = this.item.querySelector(".jsFaq__content");
        this.active = false;
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
    constructor() {
        this.faq = document.querySelector('.jsFaq');
        this.elems = this.faq.querySelectorAll('.jsFaq__item');
        this.items = [];
        this.activeItem = undefined;
        this.init();
    }

    init() {
        this.elems.forEach((i) => this.items.push(new FaqItem(i)));

        this.elems.forEach((i, x) => {
            let index = x;


            i.addEventListener('click', () => {

                if (this.activeItem) {
                    this.activeItem.close();
                }


                this.activeItem = this.items[x];
                this.items[x].click();
            });

        });
    }
}




