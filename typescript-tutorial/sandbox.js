// ts uses strict stipes
var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var character2 = 'mario'; // var as string - ts always a string and can't be changed
var age = 30; //no int for whole numbers, float desnumbers - number type for all
var isBlackBelt = false; //boolean
// character = 20
character2 = 'luigi';
// age = 'yoshi'
age = 40;
// isBlackBelt = 'yes'
isBlackBelt = true;
// value change possible but not type
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
// objects
