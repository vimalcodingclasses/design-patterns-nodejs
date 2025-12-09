import { IPayment } from "./IPayment";

export class PayPalStrategy implements IPayment {
    processPayment(amount: number) {
        console.log(`Processing PayPal payment of $${amount}.`);
        // Logic for interacting with the PayPal API
        return { success: true, method: 'PayPal' };
    }
}
