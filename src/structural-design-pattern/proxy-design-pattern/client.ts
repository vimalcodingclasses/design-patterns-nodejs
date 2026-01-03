import { CachedStockProxy } from "./CachedStockProxy";
import { RealStockService } from "./RealStockService";

async function clientCode() {
    const realService = new RealStockService();
    const proxy = new CachedStockProxy(realService);

    console.log("--- First Request (Cache Miss) ---");
    const price1 = await proxy.getPrice("AAPL");
    console.log(`Price: $${price1.toFixed(2)}\n`);

    console.log("--- Second Request (Cache Hit) ---");
    const price2 = await proxy.getPrice("AAPL"); // Should be instant
    console.log(`Price: $${price2.toFixed(2)}`);
}

clientCode();