import { IDataService } from "./IDataService";

export class DatabaseService implements IDataService {
    async getData(id: string): Promise<string> {
        // Simulate a database delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Data for record ${id}`);
            }, 500);
        });
    }
}