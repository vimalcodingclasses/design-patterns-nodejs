import { IStockService } from "./IStockService";
import { RealStockService } from "./RealStockService";

export class CachedStockProxy implements IStockService {
    private realService: RealStockService;
    private cache: Map<string, number> = new Map();

    constructor(realService: RealStockService) {
        this.realService = realService;
    }

    public async getPrice(ticker: string): Promise<number> {
        // 1. Check Cache
        if (this.cache.has(ticker)) {
            console.log(`[CachedStockProxy] Returning cached price for ${ticker}.`);
            return this.cache.get(ticker)!;
        }

        // 2. If not in cache, call the real service
        const price = await this.realService.getPrice(ticker);

        // 3. Store result in cache
        this.cache.set(ticker, price);

        return price;
    }
}