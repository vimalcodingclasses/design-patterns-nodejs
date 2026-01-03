import { InventorySystem } from "./InventorySystem";
import { LogisticsService } from "./LogisticsService";
import { PaymentGateway } from "./PaymentGateway";

export class OrderFulfillmentFacade {
    private inventory: InventorySystem;
    private payment: PaymentGateway;
    private logistics: LogisticsService;

    constructor(
        inventory: InventorySystem,
        payment: PaymentGateway,
        logistics: LogisticsService
    ) {
        this.inventory = inventory;
        this.payment = payment;
        this.logistics = logistics;
    }

    // The simplified interface for the client
    public placeOrder(productId: string, amount: number, address: string): void {
        console.log("--- Starting Order Process ---");

        // 1. Check Inventory
        if (!this.inventory.checkStock(productId)) {
            throw new Error("Product out of stock");
        }
        this.inventory.reserveItem(productId);

        // 2. Process Payment
        if (!this.payment.verifyCard("VISA-123")) {
            throw new Error("Payment failed");
        }
        this.payment.charge(amount);

        // 3. Handle Shipping
        const label = this.logistics.generateShippingLabel(address);
        this.logistics.notifyWarehouse(label);

        console.log("--- Order Completed Successfully ---");
    }
}