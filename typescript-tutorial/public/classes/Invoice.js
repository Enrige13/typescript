export class Invoice {
    // readonly client: string
    // private details: string
    // public amount: number
    constructor(client, // read in and outside, but not change it
    details, // private not able to log it in the console
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = 'Something else' - does not work, same in the forEach
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
