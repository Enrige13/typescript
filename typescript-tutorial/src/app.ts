// classes
class Invoice {
    client: string
    details: string
    amount: number

    constructor(c: string, d: string, a: number){ // otherwise a mistake on client,...
        this.client = c
        this.details = d
        this.amount = a
    }

    format() { // return template string ``
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

let invoices: Invoice[] = [] // only from the Invoice class can be added
invoices.push(invOne)
invoices.push(invTwo)
// invoices.push({ name: 'shaun' }); // not aloud, because not from Invoice

console.log(invoices)



const anchor = document.querySelector('a')!
if(anchor) {
  console.log(anchor.href) 
  // ts don't know during dev, if there is an anchor tag, error goes away with !
}
console.log(anchor.href)

//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement
// (Type Cast) cast to be as a certain type - as HTMLFormElement (otherwise it would be form: Element)
console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLInputElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault() // page refresh

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber // valueAsNumber - number type otherwise would be a string
  )
})
