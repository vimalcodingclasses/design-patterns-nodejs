export abstract class DataProcessor {
    /**
     * The "Template Method".
     * It defines the skeleton of the algorithm.
     * Notice it is 'public' so clients can call it, but the steps are 'protected'.
     * In TypeScript, we cannot strictly mark methods as 'final' to prevent overriding,
     * but by convention, we do not override this method in subclasses.
     */
    public async process(fileName: string): Promise<void> {
        console.log(`\n--- Processing ${fileName} ---`);

        this.readFile(fileName);
        const data = this.parseData(); // Abstract step
        this.analyzeData(data);        // Common step

        // Hook: Optional step that subclasses can choose to implement
        if (this.shouldSendReport()) {
            this.sendReport();
        }
    }

    // 1. Concrete Step: Shared logic across all subclasses
    protected readFile(fileName: string): void {
        console.log(`Reading file from disk: ${fileName}`);
    }

    // 2. Abstract Step: Subclasses MUST implement this
    protected abstract parseData(): any[];

    // 3. Concrete Step: Shared logic
    protected analyzeData(data: any[]): void {
        console.log(`Analyzing ${data.length} records... Done.`);
    }

    // 4. Hook: A method with a default implementation (often empty or returning true/false)
    // Subclasses can override this if they want to change the flow.
    protected shouldSendReport(): boolean {
        return true; // Default is true
    }

    protected sendReport(): void {
        console.log("Sending analysis report to admin...");
    }
}