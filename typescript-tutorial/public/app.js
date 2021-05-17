"use strict";
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
