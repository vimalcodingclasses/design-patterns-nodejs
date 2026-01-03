import { DataServiceDecorator } from "./DataServiceDecorator";

export class LoggingDecorator extends DataServiceDecorator {
    public async getData(id: string): Promise<string> {
        console.log(`[LOG] Fetching data for ID: ${id}`);

        // Delegate to parent/wrapped object
        const result = await super.getData(id);

        console.log(`[LOG] Finished fetching data for ID: ${id}`);
        return result;
    }
}