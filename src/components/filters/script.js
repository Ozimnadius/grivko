//filters.js
window.addEventListener("load", function () {

    document.querySelectorAll('.jsFilter').forEach(function (i) {
        new Filter(i);
    });

    $('.filters__btn').on("click", function (e){
        $(this).next().slideToggle();
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
        if (!media.mobile.matches) {
            $(this.filter).hover(this.slideDown, this.slideUp);
        }

        this.renderView();


        this.items.forEach((i) => {
            i.addEventListener('change', this.renderView);
        });


        if (this.btnAll) {
            this.btnAll.addEventListener('click', this.selectAll);
        }
    }

    selectAll = () => {
        this.items.forEach((i) => this.setChecked(i));
        this.renderView();
    }

    setChecked = (el) => {
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