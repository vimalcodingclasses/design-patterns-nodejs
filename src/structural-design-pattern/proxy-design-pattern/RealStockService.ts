import { IStockService } from "./IStockService";

export class RealStockService implements IStockService {
    public async getPrice(ticker: string): Promise<number> {
        console.log(`[RealStockService] Connecting to external API for ${ticker}...`);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Return a random price
        return Math.random() * 100;
    }
}