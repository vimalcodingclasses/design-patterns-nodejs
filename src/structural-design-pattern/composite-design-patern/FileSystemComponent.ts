// The Component
export abstract class FileSystemComponent {
    constructor(public name: string) { }

    // The operation we want to perform uniformly
    abstract getSize(): number;

    // Optional: Management methods (add/remove)
    // We can implement default behavior that throws errors for Leafs
    add(component: FileSystemComponent): void {
        throw new Error("Cannot add to a leaf component.");
    }

    remove(component: FileSystemComponent): void {
        throw new Error("Cannot remove from a leaf component.");
    }
}