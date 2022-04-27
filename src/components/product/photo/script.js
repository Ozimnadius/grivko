//photo.js
window.addEventListener('load', function () {
    if (document.querySelector('.jsPhotos')) {
        let photos = new Photo();
    }

    if (media.mobile.matches) {
        const photoSwiper = new Swiper('.photo__swiper', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: '.photo__pag',
                type: 'bullets',
            },
        });
    }


});

class Photo {
    constructor() {
        this.photos = document.querySelector('.jsPhotos');
        this.thumbs = this.photos.querySelectorAll('.jsThumb');
        this.photo = this.photos.querySelector('.jsPhoto');
        this.activeThumb = this.thumbs[0];
        this.init();
    }

    init() {
        this.activeThumb.classList.add("photo__thumb--active");
        this.photo.src = this.activeThumb.href;

        this.thumbs.forEach(i => i.addEventListener('click', (e) => {
            e.preventDefault();
            this.setPhoto(e.currentTarget);
        }));
    }

    setPhoto(el) {
        if (this.activeThumb) {
            this.activeThumb.classList.remove("photo__thumb--active");
        }

        this.setActive(el);

        this.photo.src = this.activeThumb.href;
    }

    setActive(el) {
        this.activeThumb = el;
        this.activeThumb.classList.add("photo__thumb--active");
    }

}