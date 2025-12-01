import { Notification } from './Notification';

export class SMSNotification implements Notification {
    send(recipient: string, message: string): void {
        console.log(`[SMS] Sending to ${recipient}: ${message}`);
    }
}