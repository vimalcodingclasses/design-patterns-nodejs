import { DatabaseService } from "./DatabaseService";
import { LoggingDecorator } from "./LoggingDecorator";
import { TimingDecorator } from "./TimingDecorator";

async function clientCode() {
    // 1. Basic usage
    const simpleService = new DatabaseService();

    // 2. Wrap it with logging
    const loggedService = new LoggingDecorator(simpleService);

    // 3. Wrap the logged service with timing
    // Structure: Timing( Logging( Database ) )
    const fullService = new TimingDecorator(loggedService);

    // The client treats 'fullService' exactly the same as 'simpleService'
    const data = await fullService.getData("user_123");
    console.log(`Final Result: ${data}`);
}

clientCode();