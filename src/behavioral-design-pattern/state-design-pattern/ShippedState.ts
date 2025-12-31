import { OrderState } from "./OrderState";
import { OrderContext } from "./OrderContext";
import { DeliveredState } from "./DeliveredState";

// --- 2. Shipped State ---
export class ShippedState implements OrderState {
    name = "Shipped";

    ship(context: OrderContext): void {
        throw new Error("Order is already shipped.");
    }

    deliver(context: OrderContext): void {
        console.log("Delivering order to customer...");
        // Transition to Delivered
        context.setState(new DeliveredState());
    }

    cancel(context: OrderContext): void {
        throw new Error("Cannot cancel an order that has already shipped.");
    }
}