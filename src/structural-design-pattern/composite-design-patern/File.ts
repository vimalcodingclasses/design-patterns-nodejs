import { FileSystemComponent } from "./FileSystemComponent";

// The Leaf
export class File extends FileSystemComponent {
    constructor(name: string, private size: number) {
        super(name);
    }

    public getSize(): number {
        console.log(`Checking size of file: ${this.name}`);
        return this.size;
    }
}