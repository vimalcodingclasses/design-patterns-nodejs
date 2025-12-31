import { Book } from "./Book";
import { IVisitor } from "./contract";
import { Electronics } from "./Electronics";

export class DiscountVisitor implements IVisitor {
    public totalPrice: number = 0;

    visitBook(book: Book): void {
        // Books get 10% discount
        const discountedPrice = book.price * 0.90;
        console.log(`Book '${book.title}' price after discount: $${discountedPrice}`);
        this.totalPrice += discountedPrice;
    }

    visitElectronics(electronics: Electronics): void {
        // Electronics get 20% discount
        const discountedPrice = electronics.price * 0.80;
        console.log(`Electronics '${electronics.name}' price after discount: $${discountedPrice}`);
        this.totalPrice += discountedPrice;
    }
}