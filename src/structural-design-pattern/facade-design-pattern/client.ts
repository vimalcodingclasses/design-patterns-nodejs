import { InventorySystem } from "./InventorySystem";
import { LogisticsService } from "./LogisticsService";
import { OrderFulfillmentFacade } from "./OrderFulfillmentFacade";
import { PaymentGateway } from "./PaymentGateway";

// Usage
function main() {
    // Initialize subsystems (Dependency Injection is best here usually)
    const inventory = new InventorySystem();
    const payment = new PaymentGateway();
    const logistics = new LogisticsService();

    // Initialize Facade
    const orderFacade = new OrderFulfillmentFacade(inventory, payment, logistics);

    // Client interacts only with the Facade
    orderFacade.placeOrder("MacBook Pro", 2000, "123 Tech Lane, Silicon Valley");
}

main();