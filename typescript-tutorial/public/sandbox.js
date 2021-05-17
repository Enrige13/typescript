"use strict";
// ts uses strict stipes
const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
let character2 = 'mario'; // var as string - ts always a string and can't be changed
let age = 30; //no int for whole numbers, float desnumbers - number type for all
let isBlackBelt = false; //boolean
// character = 20
character2 = 'luigi';
// age = 'yoshi'
age = 40;
// isBlackBelt = 'yes'
isBlackBelt = true;
// value change possible but not type
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
let names = ['luigi', 'mario', 'yoshi']; // array of strings
names.push('toad');
// names.push(3)
// names[0] = 3
let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun')
// numbers[1] = 'shaun'
let mixed = ['ken', 4, 'chun-li', 8, 9]; // declair at start - can add all
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30' // need to be number, not a string
// ninja.skills = ['fighting', 'sneaking'] // can't add additional objects
// overright is possible, but need every object as before (can't add new one as well)
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: []
};
// explicit types
let character3;
let age2;
let isLoggedIn;
// age = 'luigi'
age2 = 30;
// isLoggedIn = 25
isLoggedIn = true;
// arrays
// let ninjas: string[]
let ninjas = [];
// ninjas = ['yoshi', 'mario']
ninjas.push('yoshi');
// union types
let mixed2 = []; // can store numbers and strings and booleans
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log(mixed2);
let uid; // union type don't need (), but array needs it
uid = '123';
uid = 123;
// objects
let ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
ninjaOne = []; // can be an array too
let ninjaTwo; // type of object
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
}; // can't add an extra property because they are declared already
// any Type
let age3 = 25; // reverts ts to js, less helpful 
age3 = true;
console.log(age3);
age3 = 'hello';
console.log(age3);
age3 = { name: 'luigi' };
console.log(age3);
let mixed3 = [];
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);
let ninja2;
ninja2 = { name: 'yoshi', age: 25 };
console.log(ninja2);
ninja2 = { name: 25, age: 'yoshi' };
console.log(ninja2);
// Workflow
console.log('test');
// Function Basics
let greet;
// greet = 'hello'
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
// c?: - ? = optional
// number|string = 10 - default value 10, if value is added, it will be overwritten
add(5, 10);
const minus2 = (a, b) => {
    return a + b;
}; // :number - does not need to be placed
let result = minus2(10, 7); // result automatically number
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
const greet2Again = (user) => {
    console.log(`${user.name} says hello`);
};
// Function Signatures
// let greet3: Function
// () => void // function takes no arguments, returns void
// example 1
let greet3;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails2;
logDetails2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
