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
