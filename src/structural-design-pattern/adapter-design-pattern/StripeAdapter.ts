import { IPaymentProcessor } from "./IPaymentProcessor";
import { StripeLikeService } from "./StripeLikeService";

export class StripeAdapter implements IPaymentProcessor {
    private adaptee: StripeLikeService;

    constructor(adaptee: StripeLikeService) {
        this.adaptee = adaptee;
    }

    // Implementation of the Target interface
    public pay(amount: number, currency: string): void {
        // 1. Convert the data to the format the Adaptee expects
        const transactionConfig = {
            total: amount,
            isoCode: currency,
        };

        // 2. Call the Adaptee's method
        this.adaptee.makeTransaction(transactionConfig);
    }
}