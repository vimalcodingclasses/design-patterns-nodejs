import { IMessageProvider } from "./IMessageProvider";

/**
 * THE ABSTRACTION
 * This defines the "control" logic. It maintains a reference
 * to an object of type IMessageProvider (the bridge).
 */
export abstract class Notification {
    protected provider: IMessageProvider;

    constructor(provider: IMessageProvider) {
        this.provider = provider;
    }

    // This method delegates the actual work to the Implementation object
    public abstract send(body: string, user: string): void;
}