import ConfigurationManager from './config-manager';

// --- Module A Access ---
const configA = ConfigurationManager.getInstance();

console.log(`Module A: Initial Log Level is ${configA.get('LOG_LEVEL')}`);
configA.set('LOG_LEVEL', 'DEBUG');
configA.set('TIMEOUT', 500); // Add a new setting

// --- Module B Access ---
const configB = ConfigurationManager.getInstance();

console.log(`Module B: Current Log Level is ${configB.get('LOG_LEVEL')}`);
console.log(`Module B: MAX_POOL_SIZE is ${configB.get('MAX_POOL_SIZE')}`);

// Proof that configA and configB are the same instance
if (configA === configB) {
    console.log("\nSuccess: configA and configB reference the same single instance!");
}

configB.printAllSettings();

// The following line will produce a TypeScript compilation error:
// const invalidInstance = new ConfigurationManager(); // Error: Constructor of class 'ConfigurationManager' is private