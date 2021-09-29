window.addEventListener('load', function (){
    new Tabs();
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