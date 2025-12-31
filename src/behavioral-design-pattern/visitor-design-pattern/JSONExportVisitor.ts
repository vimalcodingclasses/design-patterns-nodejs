import { Book } from "./Book";
import { IVisitor } from "./contract";
import { Electronics } from "./Electronics";

export class JSONExportVisitor implements IVisitor {
    public exportData: any[] = [];

    visitBook(book: Book): void {
        this.exportData.push({
            type: 'BOOK',
            meta: { title: book.title, cost: book.price }
        });
    }

    visitElectronics(electronics: Electronics): void {
        this.exportData.push({
            type: 'GADGET',
            meta: { name: electronics.name, warranty: `${electronics.warrantyYears} years` }
        });
    }
}