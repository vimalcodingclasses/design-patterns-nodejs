import { INotification } from './INotification';

export class SMSNotification implements INotification {
    send(recipient: string, message: string): void {
        console.log(`[SMS] Sending to ${recipient}: ${message}`);
    }
}