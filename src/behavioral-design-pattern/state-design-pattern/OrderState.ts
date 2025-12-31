import { OrderContext } from "./OrderContext";

export interface OrderState {
    name: string;

    // Actions the order can perform
    ship(context: OrderContext): void;
    deliver(context: OrderContext): void;
    cancel(context: OrderContext): void;
}