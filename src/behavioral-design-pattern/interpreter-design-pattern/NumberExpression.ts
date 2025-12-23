import { IExpression } from "./Expression";

// Terminal expression
export class NumberExpression implements IExpression {
    constructor(private value: any) {
        this.value = value;
    }

    interpret() {
        return this.value;
    }
}