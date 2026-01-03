import { IPaymentProcessor } from "./IPaymentProcessor";
import { StripeAdapter } from "./StripeAdapter";
import { StripeLikeService } from "./StripeLikeService";

// Client code
function processOrder(processor: IPaymentProcessor) {
    // The client code works with any object that follows the IPaymentProcessor interface
    processor.pay(100, 'USD');
}

// Scenario 1: Using the old system (if it existed) or a standard implementation
// processOrder(new OldPaymentProcessor());

// Scenario 2: Using the new 3rd party service via the Adapter
const stripeService = new StripeLikeService();
const adapter = new StripeAdapter(stripeService);

console.log('Client: Processing order via Adapter...');
processOrder(adapter);