import { DataServiceDecorator } from "./DataServiceDecorator";

export class TimingDecorator extends DataServiceDecorator {
    public async getData(id: string): Promise<string> {
        const start = Date.now();

        // Delegate
        const result = await super.getData(id);

        const end = Date.now();
        console.log(`[PERF] Request took ${end - start}ms`);
        return result;
    }
}