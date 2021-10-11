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