// config-manager.ts

class ConfigurationManager {
    private static instance: ConfigurationManager;
    private settings: Map<string, any>;

    /**
     * The constructor is PRIVATE to prevent external instantiation.
     */
    private constructor() {
        // Initialize state here
        this.settings = new Map();
        console.log("ConfigurationManager: Initializing (First time only)");

        // Load initial settings (e.g., from a file or environment variables)
        this.settings.set('MAX_POOL_SIZE', 10);
        this.settings.set('LOG_LEVEL', 'INFO');
    }

    /**
     * The static method that controls access to the singleton instance.
     * It ensures lazy loading (the instance is created only when requested).
     */
    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    // --- Public methods for managing the configuration ---

    public get(key: string): any {
        return this.settings.get(key);
    }

    public set(key: string, value: any): void {
        this.settings.set(key, value);
        console.log(`Setting '${key}' updated to '${value}'`);
    }

    public printAllSettings(): void {
        console.log("\n--- Current Settings ---");
        this.settings.forEach((value, key) => {
            console.log(`- ${key}: ${value}`);
        });
        console.log("------------------------\n");
    }
}

// Export the getInstance method for easy access.
export default ConfigurationManager;