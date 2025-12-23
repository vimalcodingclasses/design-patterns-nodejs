import { IExpression } from "./Expression";

// Non-terminal expression
export class SubtractExpression implements IExpression {
    constructor(private left: any, private right: any) {
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}