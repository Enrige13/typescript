"use strict";
// classes
// class Invoice { // properties are normally public
//     client: string
//     details: string
//     amount: number
//     constructor(c: string, d: string, a: number){ // otherwise a mistake on client,...
//         this.client = c
//         this.details = d
//         this.amount = a
//     }
//     format() { // return template string ``
//         return `${this.client} owes £${this.amount} for ${this.details}`
//     }
// }
// const invOne = new Invoice('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300)
// let invoices: Invoice[] = [] // only from the Invoice class can be added
// invoices.push(invOne)
// invoices.push(invTwo)
// // invoices.push({ name: 'shaun' }); // not aloud, because not from Invoice
// console.log(invoices)
// classes 2
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, // read in and outside, but not change it
    details, // private not able to log it in the console
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = 'Something else' - does not work, same in the forEach
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
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
