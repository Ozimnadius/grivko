window.addEventListener('load', function (){
    const mmenu = new Mmenu();
});

class Mmenu{

    constructor(obj){
        let def = {
            menu: '.mmenu',
            menuItem: '.mmenu__item',
            menuOpen: '.jsMenuOpen',
            menuClose: '.jsMenuClose',
            submenu: '.submmenu',
            submenuOpen: '.jsSubmenuOpen',
            submenuClose: '.jsSubmenuClose'
        };

        let settings = Object.assign(def,obj);

        this.menu = document.querySelector(settings.menu);
        this.menuOpen = document.querySelectorAll(settings.menuOpen);
        this.menuClose = document.querySelectorAll(settings.menuClose);
        this.submenus = document.querySelectorAll(settings.submenu);
        this.submenuOpen = document.querySelectorAll(settings.submenuOpen);
        this.submenuClose = document.querySelectorAll(settings.submenuClose);

        for (let i = 0; i < this.menuOpen.length; i++) {
            this.menuOpen[i].addEventListener('click', ()=>{this.open()});
        }
        for (let i = 0; i < this.menuClose.length; i++) {
            this.menuClose[i].addEventListener('click', ()=>{this.close()});
        }

        for (let i = 0; i < this.submenuOpen.length; i++) {
            let btn = this.submenuOpen[i];
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                e.stopPropagation();
                let item =  e.currentTarget.closest('.mmenu__item'),
                    submenu = item.querySelector(settings.submenu);
                this.openSubmenu(submenu)
            });
        }
        for (let i = 0; i < this.submenuClose.length; i++) {
            let btn = this.submenuClose[i];
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                e.stopPropagation();
                let submenu =  e.currentTarget.closest(settings.submenu);
                this.closeSubmenu(submenu)
            });
        }

        document.addEventListener('click',  (e)=> {
            let target = e.target;

            if (!target.closest(settings.menu) && !target.closest(settings.menuOpen)) {
                this.close();
            }

        });
    }

    open(){
        this.menu.classList.add('active');
        document.querySelector('body').classList.add('ovh');
    }

    close() {
        this.menu.classList.remove('active');
        document.querySelector('body').classList.remove('ovh');

        for (let i=0;i<this.submenus.length;i++){
            this.closeSubmenu(this.submenus[i]);
        }
    }

    openSubmenu(submenu){
        submenu.classList.add('active');
    }

    closeSubmenu(submenu){
        submenu.classList.remove('active');
    }


}

