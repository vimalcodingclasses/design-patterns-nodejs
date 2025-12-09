import { IPayment } from "./IPayment";

export class BankTransferStrategy implements IPayment {
    processPayment(amount: number) {
        console.log(`Processing bank transfer payment of $${amount}.`);
        // Logic for initiating a Bank Transfer
        return { success: true, method: 'Bank Transfer' };
    }
}