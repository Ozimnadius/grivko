window.addEventListener('load',function () {
    if(window.matchMedia("(max-width: 767.98px)").matches) {
        let acc = new OzimnadAccordion({
            selector: '.footer__acc'
        });
    }
});