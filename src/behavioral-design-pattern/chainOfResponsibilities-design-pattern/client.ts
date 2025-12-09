import { AuthenticationHandler } from "./AuthenticationHandler";
import { DataProcessor } from "./DataProcessor";
import { ValidationHandler } from "./ValidationHandler";

// 1. Create the handler instances
const authenticator = new AuthenticationHandler();
const validator = new ValidationHandler();
const processor = new DataProcessor();

// 2. Build the chain: Authenticator -> Validator -> Processor
authenticator.setNext(validator).setNext(processor);

// --- Client Usage ---

const goodRequest = {
    user: 'admin',
    password: 'pass',
    data: 'This is some data'
};
const badRequest = {
    user: 'guest',
    password: '123',
    data: 'short'
};

console.log('--- Executing Good Request ---');
let result1 = authenticator.handle(goodRequest);
console.log('Final Result 1:', result1);

console.log('\n--- Executing Bad Request ---');
let result2 = authenticator.handle(badRequest);
console.log('Final Result 2:', result2);