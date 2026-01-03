import { IDataService } from "./IDataService";

export abstract class DataServiceDecorator implements IDataService {
    protected wrappee: IDataService;

    constructor(wrappee: IDataService) {
        this.wrappee = wrappee;
    }

    // Delegate the work to the wrappee
    public getData(id: string): Promise<string> {
        return this.wrappee.getData(id);
    }
}