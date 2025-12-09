import { INotification } from './INotification';
import { EmailNotification } from './EmailNotification';
import { SMSNotification } from './SMSNotification';

type NotificationType = 'email' | 'sms';

// The factory method
export const createNotificationFactory = (type: NotificationType): INotification => {
    switch (type) {
        case 'email':
            return new EmailNotification();
        case 'sms':
            return new SMSNotification();
        default:
            // Ensures the factory returns a valid product or throws an error
            throw new Error(`Unknown notification type: ${type}`);
    }
}