// The Component Interface
export interface IDataService {
    getData(id: string): Promise<string>;
}