console.log('chp2 javascript file')

class ZQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        // weird?
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';

    }

    append(node) {}

    html(data) {}

    addClass(name) {}


}

window.$ = function(selector) {
    return new ZQuery(selector);
}