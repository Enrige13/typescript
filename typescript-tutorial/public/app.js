"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = []; // only from the Invoice class can be added
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'shaun' }); // not aloud, because not from Invoice
console.log(invoices);
var anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
    // ts don't know during dev, if there is an anchor tag, error goes away with !
}
console.log(anchor.href);
//const form = document.querySelector('form')!
var form = document.querySelector('.new-item-form');
// (Type Cast) cast to be as a certain type - as HTMLFormElement (otherwise it would be form: Element)
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // page refresh
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // valueAsNumber - number type otherwise would be a string
    );
});
