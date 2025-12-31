import { IVisitable, IVisitor } from "./contract";

export class Electronics implements IVisitable {
    constructor(public name: string, public price: number, public warrantyYears: number) { }

    accept(visitor: IVisitor): void {
        visitor.visitElectronics(this);
    }
}