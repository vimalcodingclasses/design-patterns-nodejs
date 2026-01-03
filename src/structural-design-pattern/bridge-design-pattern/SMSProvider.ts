import { IMessageProvider } from "./IMessageProvider";

/**
 * CONCRETE IMPLEMENTATION B
 */
export class SMSProvider implements IMessageProvider {
    connect(): void {
        console.log("Connected to GSM Network.");
    }

    sendMessage(message: string, recipient: string): void {
        console.log(`Sending SMS to ${recipient}: "${message}"`);
    }
}