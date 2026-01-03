// The Flyweight stores the shared portion of the state (Intrinsic)
export class TreeType {
    private name: string;
    private color: string;
    private texture: string; // Imagine this is a large data buffer

    constructor(name: string, color: string, texture: string) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    // This method accepts extrinsic state (x, y) to perform an action
    public draw(canvas: any, x: number, y: number): void {
        // In a real Node app, this might generate a JSON packet or render logic
        console.log(`Drawing a '${this.name}' tree (Color: ${this.color}) at coordinates [${x}, ${y}]`);
    }
}