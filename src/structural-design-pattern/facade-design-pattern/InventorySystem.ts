// Subsystem 1: Inventory
export class InventorySystem {
    public checkStock(productId: string): boolean {
        console.log(`Checking stock for product: ${productId}`);
        return true; // Simplified for demo
    }

    public reserveItem(productId: string): void {
        console.log(`Item reserved: ${productId}`);
    }
}