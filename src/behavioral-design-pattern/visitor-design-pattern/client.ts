import { Book } from "./Book";
import { IVisitable } from "./contract";
import { DiscountVisitor } from "./DiscountVisitor";
import { Electronics } from "./Electronics";
import { JSONExportVisitor } from "./JSONExportVisitor";

// Setup the object structure (Inventory)
const inventory: IVisitable[] = [
    new Book("Design Patterns in TypeScript", 50),
    new Electronics("Noise Cancelling Headphones", 200, 2),
    new Book("Clean Code", 40)
];

// --- Operation 1: Calculate Discounts ---
console.log("--- Calculating Discounts ---");
const discountCalc = new DiscountVisitor();

inventory.forEach(item => item.accept(discountCalc));

console.log(`Total Inventory Value (after discounts): $${discountCalc.totalPrice}`);


// --- Operation 2: Export Data ---
console.log("\n--- Exporting Data ---");
const exporter = new JSONExportVisitor();

inventory.forEach(item => item.accept(exporter));

console.log(JSON.stringify(exporter.exportData, null, 2));