import { FileSystemComponent } from "./FileSystemComponent";

// The Composite
export class Folder extends FileSystemComponent {
    protected children: FileSystemComponent[] = [];

    public add(component: FileSystemComponent): void {
        this.children.push(component);
    }

    public remove(component: FileSystemComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    public getSize(): number {
        console.log(`-- Calculating size of folder: ${this.name}`);

        // The magic happens here: Recursion without explicit recursive logic
        return this.children.reduce((acc, child) => acc + child.getSize(), 0);
    }
}