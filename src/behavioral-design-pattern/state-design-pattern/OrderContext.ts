import { OrderState } from "./OrderState";
import { PendingState } from "./PendingState";

export class OrderContext {
    private state: OrderState;
    public orderId: string;

    constructor(orderId: string) {
        this.orderId = orderId;
        // Default initial state
        this.state = new PendingState();
    }

    // Method to change state (usually called by the State classes)
    public setState(state: OrderState): void {
        console.log(`[Order ${this.orderId}] Transitioning from ${this.state.name} to ${state.name}`);
        this.state = state;

        // TODO: Here you would save the new status string to your database (e.g., MongoDB/Postgres)
        // db.orders.update({ id: this.orderId }, { status: state.name });
    }

    public getState(): OrderState {
        return this.state;
    }

    // --- Delegation Methods ---

    public requestShip(): void {
        this.state.ship(this);
    }

    public requestDelivery(): void {
        this.state.deliver(this);
    }

    public requestCancel(): void {
        this.state.cancel(this);
    }
}