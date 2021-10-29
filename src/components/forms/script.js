window.addEventListener('load', function () {


});

class Template {
    constructor() {
        this.content = document.querySelector('#templates').content;
    }

    html(name) {
        return this.content.querySelector(`#${name}`).innerHTML;
    }

    close() {
        $.fancybox.close();
    }

    open(name,opt={}) {
        $.fancybox.open(this.html(name),opt);
        $('.input[type="tel"]').inputmask("+7(999)999-99-99");
    }

    get current() {
        return $.fancybox.getInstance().current.$content;
    }
}



const template = new Template();

class Files {
    constructor() {
        this.files = document.querySelector('.files');
        this.btn = this.files.querySelector('.files__plus');
        this.input = undefined;
        this.list = this.files.querySelector('.files__list');
        this.fileList = undefined;
        this.index = 0;
        this.init();
    }

    init() {
        this.addInput();
        this.input.addEventListener('change', (e) => {
            this.fileList = e.currentTarget.files;
            this.addFiles();
        })

        this.btn.addEventListener('click', (e) => {
            this.input.click();
        });
    }

    addInput() {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'file');
        this.input.setAttribute('multiple', true);
        this.input.setAttribute('accept', 'image/*');
    }

    html() {
        const tmp = document.querySelector('#file').content;
        return tmp.querySelector('.file__item').cloneNode(true);
    }

    createImg(file) {
        const img = document.createElement("img");
        img.src = window.URL.createObjectURL(file);
        img.onload = function () {
            window.URL.revokeObjectURL(this.src);
        }
        return img;
    }

    addFiles() {

        Array.from(this.fileList).forEach((i) => {
            let item = this.html();
            let img = this.createImg(i);
            item.querySelector('.file__img').appendChild(img);
            let input = item.querySelector('.file__input');
            input.name = `file[${this.index}]`;
            let dt = new DataTransfer();
            dt.items.add(new File([i], i.name, {type: i.type}));
            let file_list = dt.files;
            input.files = file_list;
            this.list.appendChild(item);
            this.index++;

            item.addEventListener('click', function (e) {
                this.remove();
            });
        });
    }
}