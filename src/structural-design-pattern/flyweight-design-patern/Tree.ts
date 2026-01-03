import { TreeType } from "./TreeType";

export class Tree {
    public x: number;
    public y: number;
    public type: TreeType; // Reference to the Flyweight

    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    public draw(canvas: any): void {
        // We pass the unique (extrinsic) state to the shared (intrinsic) object
        this.type.draw(canvas, this.x, this.y);
    }
}