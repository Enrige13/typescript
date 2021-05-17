export class ListTemplate {
    constructor(container) {
        this.container = container;
    } // new instance of list item
    // invoice or payment, heading, position
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format(); // .format from HasFormatter
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
