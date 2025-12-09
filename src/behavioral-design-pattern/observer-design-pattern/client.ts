import { AnalyzerObserver } from "./AnalyzerObserver";
import { DataStream } from "./DataStream";
import { loggerObserver } from "./loggerObserver";

// 1. Create the Subject instance
const stockTicker = new DataStream('StockTicker');

// 2. Create the Observer instances
const marketAnalyzer = new AnalyzerObserver('MarketAnalyzer');

// 3. Attach Observers (Subscription)
// Observer 1 (function) subscribes
stockTicker.on('dataUpdate', loggerObserver);

// Observer 2 (class method) subscribes
stockTicker.on('dataUpdate', marketAnalyzer.analyze.bind(marketAnalyzer));


// --- State Changes & Notification ---

// State change 1: All observers are notified
stockTicker.publishData(25);

// State change 2: All observers are notified
stockTicker.publishData(78);

// 4. Detach an Observer (Optional Unsubscription)
// Remove the logger observer
stockTicker.removeListener('dataUpdate', loggerObserver);

// State change 3: Only the Analyzer observer is notified
stockTicker.publishData(15);