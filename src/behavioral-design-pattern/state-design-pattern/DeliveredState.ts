import { OrderState } from "./OrderState";
import { OrderContext } from "./OrderContext";

// --- 3. Delivered State ---
export class DeliveredState implements OrderState {
    name = "Delivered";

    ship(context: OrderContext): void {
        throw new Error("Order already delivered.");
    }

    deliver(context: OrderContext): void {
        throw new Error("Order already delivered.");
    }

    cancel(context: OrderContext): void {
        throw new Error("Cannot cancel a delivered order.");
    }
}
