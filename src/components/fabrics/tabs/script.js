window.addEventListener('load', function (){

    let type = 'absolute';
    if (window.matchMedia('(max-width: 767.98px)').matches){
        type = 'default';
    }

    let tabs = new OzimnadTabs({
        selector: '.fabrics-tabs',
        btnSelector: '.fabrics-tabs__btn',
        tabSelector: '.fabrics-tabs__tab',
        type: type
    });


    let $select = $('.fabrics-tabs__select');

    $select.styler();

    $select.on('change', function (){
        tabs.deactivate();
        tabs.activeIndex = this.value;
        tabs.activate();
    });

});