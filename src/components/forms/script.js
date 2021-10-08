class Template {
    constructor() {
        this.content = document.querySelector('#templates').content;
    }

    html(name) {
        return this.content.querySelector(`#${name}`).innerHTML;
    }

    open(name) {
        $.fancybox.open(this.html(name));
    }
}

const forms = new Template();