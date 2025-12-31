// 1. The Visitor Interface

import { Book } from "./Book";
import { Electronics } from "./Electronics";

// Declares a visit method for each concrete element type.
export interface IVisitor {
    visitBook(book: Book): void;
    visitElectronics(electronics: Electronics): void;
}

// 2. The Visitable Interface
// Declares an accept method that takes a visitor.
export interface IVisitable {
    accept(visitor: IVisitor): void;
}