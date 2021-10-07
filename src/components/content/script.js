//- content.js
window.addEventListener('load', function () {
    document.querySelectorAll('.content table').forEach(i => new Table(i));
});

class Table {
    constructor(el) {
        this.table = el;
        this.names = Array.from(this.table.querySelectorAll('th')).map(i => i.innerText);
        this.trs = this.table.querySelectorAll('tbody tr');

        this.init();
        // console.log(this);
    }

    init() {
        this.trs.forEach((i => this.getCols(i)));
    }

    getCols = (i) => {
        i.querySelectorAll('td').forEach((i, x) => this.setName(i, x));
    }

    setName = (td, x) => {
        td.dataset.name = this.names[x];
    }


}