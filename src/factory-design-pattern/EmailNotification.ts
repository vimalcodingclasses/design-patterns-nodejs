import { Notification } from './Notification';

export class EmailNotification implements Notification {
    send(recipient: string, message: string): void {
        console.log(`[EMAIL] Sending to ${recipient}: ${message}`);
    }
}