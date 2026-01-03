/**
 * THE IMPLEMENTATION INTERFACE
 * This defines the common operations for all implementation classes.
 * It doesn't need to match the Abstraction's interface.
 */
export interface IMessageProvider {
    sendMessage(message: string, recipient: string): void;
    connect(): void;
}