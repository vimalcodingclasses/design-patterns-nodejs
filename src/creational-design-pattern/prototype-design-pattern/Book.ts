export class Book {
    constructor(private title: string, private author: string, private price: number, private data: any) {
        this.title = title;
        this.author = author;
        this.price = price;
        // Example of a reference type property (an array)
        this.data = data;
    }

    /**
     * Creates a SHALLOW copy of the Book object.
     * Note: Reference type properties (like 'data') will still point to the same object.
     */
    clone() {
        // Use the spread operator for a concise shallow copy
        const clonedBook = new Book(
            this.title,
            this.author,
            this.price,
            this.data
        );
        return clonedBook;
    }

    /**
     * Creates a DEEP copy of the Book object.
     * Use this when nested objects/arrays must be independent of the original.
     */
    deepClone() {
        // Simple deep clone using JSON methods (works if properties are JSON-safe)
        return new Book(
            this.title,
            this.author,
            this.price,
            JSON.parse(JSON.stringify(this.data)) // Deep copy of the data property
        );
    }

    displayDetails() {
        console.log(`Title: ${this.title} | Price: $${this.price.toFixed(2)} | Data ID: ${this.data.length}`);
        // Log the reference to demonstrate shallow vs. deep copy effects
        console.log(`Current Data Array: ${this.data.join(', ')}`);
    }
}