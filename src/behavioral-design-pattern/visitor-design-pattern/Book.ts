import { IVisitable, IVisitor } from "./contract";

export class Book implements IVisitable {
    constructor(public title: string, public price: number) { }

    // The "Double Dispatch" magic happens here.
    // The Book tells the visitor: "Visit me specifically as a Book."
    accept(visitor: IVisitor): void {
        visitor.visitBook(this);
    }
}
