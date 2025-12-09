import { IPayment } from "./IPayment";

export class CreditCardStrategy implements IPayment {
    processPayment(amount: number): any {
        console.log(`Processing credit card payment of $${amount}.`);
        // Logic for interacting with a Credit Card payment gateway
        return { success: true, method: 'Credit Card' };
    }
}
