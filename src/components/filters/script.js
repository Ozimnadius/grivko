//filters.js
window.addEventListener("load", function () {

    console.log("FILTERS.JS");

    // $(".jsFilter").hover(function () {
    //     let $this = $(this),
    //         $drop = $this.find(".filter__drop"),
    //         $dropInner = $drop.find(".filter-drop"),
    //         height = $dropInner.outerHeight();
    //     $drop.css("height", height + "px");
    //
    // }, function () {
    //     let $this = $(this),
    //         $drop = $this.find(".filter__drop"),
    //         $dropInner = $drop.find(".filter-drop"),
    //         height = $dropInner.outerHeight();
    //
    //     $drop.css("height", "0px");
    // });

    document.querySelectorAll('.jsFilter').forEach(function (i){
       new Filter(i);
    });

    $(".filter-select__option input").on("change", function (){
        let $this = $(this),
            val = $this.val(),
            $filter = $this.closest(".jsFilter");
            $filter.find(".filter-view .filter-select__option").text(val);
    });



});

class Filters{
    constructor() {

    }
}

class Filter{
    constructor(elem) {
        this.filter = elem;
        this.drop = this.filter.querySelector('.filter__drop');
        this.view = this.filter.querySelector('.jsFilter__view');
        this.vals = this.filter.querySelectorAll('.jsFilter__val:checked');

        this.template = this.filter.querySelector('template').content;
        this.templateParent = this.template.querySelector('.filter-template__parent').cloneNode(true);
        this.templateChild = this.template.querySelector('.filter-template__item');
        this.init();
    }

    init(){
        $(this.filter).hover(this.slideDown,this.slideUp);
        this.renderView();
    }

    renderView(){
        this.vals.forEach((e)=>{
            let item = this.templateChild.cloneNode(true);


            let html = item.outerHTML.replace("{{val}}", e.value);

            this.templateParent.insertAdjacentHTML("beforeend",html);
        });

        this.view.innerHTML = "";
        this.view.append(this.templateParent);

        // console.log(this.templateParent);
    }

    get getDropHeight(){
       return  this.drop.querySelector('.filter-drop').offsetHeight;
    }

    slideDown=()=>{
        this.drop.style.height = `${this.getDropHeight}px`;
    }

    slideUp=()=>{
        this.drop.style.height = "0px";
    }

}