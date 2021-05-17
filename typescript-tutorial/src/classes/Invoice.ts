import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly client: string, // read in and outside, but not change it
      private details: string, // private not able to log it in the console
      public amount: number,
    ){}
  
    format() {
        // this.client = 'Something else' - does not work, same in the forEach
      return `${this.client} owes £${this.amount} for ${this.details}`
    }
}