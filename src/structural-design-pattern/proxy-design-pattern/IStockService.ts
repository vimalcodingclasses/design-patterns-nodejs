// The Subject Interface
export interface IStockService {
    getPrice(ticker: string): Promise<number>;
}