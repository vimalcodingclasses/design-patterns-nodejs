import { IMessageProvider } from "./IMessageProvider";

/**
 * CONCRETE IMPLEMENTATION A
 */
export class EmailProvider implements IMessageProvider {
    connect(): void {
        console.log("Connected to SMTP Server.");
    }

    sendMessage(message: string, recipient: string): void {
        console.log(`Sending EMAIL to ${recipient}: "${message}"`);
    }
}