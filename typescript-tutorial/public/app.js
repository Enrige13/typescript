// classes
// class Invoice { // properties are normally public
//     client: string
//     details: string
//     amount: number
const me = {
    name: 'shaun',
    //age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
console.log(me);
me.speak('hello, world');
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
//greetPerson({name: 'shaun'}); // must match IsPerson
// classes + modules
// drawback: only modern browsers support that, not in a single file (seperate requests)
// webpack to solve the "single file" problem
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
    // ts don't know during dev, if there is an anchor tag, error goes away with !
}
console.log(anchor.href);
//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form');
// (Type Cast) cast to be as a certain type - as HTMLFormElement (otherwise it would be form: Element)
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // page refresh
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // valueAsNumber - number type otherwise would be a string
    );
});
