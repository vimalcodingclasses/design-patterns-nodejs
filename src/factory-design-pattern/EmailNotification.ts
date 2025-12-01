import { INotification } from './INotification';

export class EmailNotification implements INotification {
    send(recipient: string, message: string): void {
        console.log(`[EMAIL] Sending to ${recipient}: ${message}`);
    }
}