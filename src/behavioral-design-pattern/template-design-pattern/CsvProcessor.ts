import { DataProcessor } from "./DataProcessor";

export class CsvProcessor extends DataProcessor {
    protected parseData(): any[] {
        console.log("Splitting CSV text by commas...");
        // Simulation of parsing logic
        return [{ id: 1 }, { id: 2 }, { id: 3 }];
    }

    // Hook Override: We do NOT want to send reports for CSVs
    protected shouldSendReport(): boolean {
        return false;
    }
}