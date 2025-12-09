import { IPayment } from "./IPayment";

// Context(The Client that Uses the Strategy)
export class PaymentProcessor {
    constructor(private strategy: IPayment) {
        this.strategy = strategy;
    }

    executePayment(amount: number) {
        if (!this.strategy) {
            throw new Error("No payment strategy set.");
        }
        // Delegation: The Context calls the method on the strategy object.
        return this.strategy.processPayment(amount);
    }
}