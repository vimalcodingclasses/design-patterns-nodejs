import { OrderState } from "./OrderState";
import { OrderContext } from "./OrderContext";
import { ShippedState } from "./ShippedState";
import { CancelledState } from "./CancelledState";

// --- 1. Pending State ---
export class PendingState implements OrderState {
    name = "Pending";

    ship(context: OrderContext): void {
        console.log("Processing shipment...");
        // Transition to Shipped
        context.setState(new ShippedState());
    }

    deliver(context: OrderContext): void {
        throw new Error("Cannot deliver a pending order. It must be shipped first.");
    }

    cancel(context: OrderContext): void {
        console.log("Cancelling order...");
        // Transition to Cancelled (Simplified for this example)
        context.setState(new CancelledState());
    }
}