// ts uses strict stipes
const character = 'mario'
console.log(character)
const inputs = document.querySelectorAll('input')
console.log(inputs)
inputs.forEach(input => {
    console.log(input);
})



let character2 = 'mario' // var as string - ts always a string and can't be changed
let age = 30 //no int for whole numbers, float desnumbers - number type for all
let isBlackBelt = false //boolean

// character = 20
character2 = 'luigi'
// age = 'yoshi'
age = 40
// isBlackBelt = 'yes'
isBlackBelt = true
// value change possible but not type

const circ = (diameter: number) => { //diameter: number, string, boolean
    return diameter * Math.PI
}
console.log(circ(7.5))



// arrays


// objects




