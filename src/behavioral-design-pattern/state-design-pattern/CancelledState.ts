import { OrderState } from "./OrderState";
import { OrderContext } from "./OrderContext";

// --- 4. Cancelled State ---
export class CancelledState implements OrderState {
    name = "Cancelled";

    ship(ctx: OrderContext) { throw new Error("Cancelled order cannot be shipped"); }
    deliver(ctx: OrderContext) { throw new Error("Cancelled order cannot be delivered"); }
    cancel(ctx: OrderContext) { throw new Error("Order already cancelled"); }
}