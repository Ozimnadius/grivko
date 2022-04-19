window.addEventListener('load', function (){
    document.querySelectorAll('.fabrics-brands').forEach((i)=>{
        if (window.matchMedia('(max-width: 767.98px)').matches){
            new OzimnadAccordion({
                selector: i,
            });
        }else{
            new OzimnadTabs({
                selector: i,
                btnSelector: '.fabrics-brands__btn',
                tabSelector: '.fabrics-brands__tab',
                type: 'absolute'
            });
        }

    });
});