import { IHandler } from "./IHandler";

/**
 * Abstract Handler Class (BaseHandler)
 * Defines the common interface and linkage logic.
 */
export class BaseHandler implements IHandler {
    private nextHandler: any;
    constructor() {
        this.nextHandler = null;
    }

    // Method to build the chain
    setNext(handler: any) {
        this.nextHandler = handler;
        // Return the passed handler for convenient chaining (fluent interface)
        return handler;
    }

    // The core method that concrete handlers must implement
    handle(request: any) {
        // Default behavior: if the current handler can't handle it, pass it to the next
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        // If it reaches the end of the chain and no one handled it, return null/false
        return null;
    }
}