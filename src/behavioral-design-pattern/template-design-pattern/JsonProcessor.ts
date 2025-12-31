import { DataProcessor } from "./DataProcessor";

export class JsonProcessor extends DataProcessor {
    protected parseData(): any[] {
        console.log("Parsing data as JSON structure...");
        // Simulation of parsing logic
        return [{ id: 1 }, { id: 2 }];
    }

    // We accept the default 'shouldSendReport' (true), so we don't override it.
}