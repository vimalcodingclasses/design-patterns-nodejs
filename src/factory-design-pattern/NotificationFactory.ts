import { Notification } from './Notification';
import { EmailNotification } from './EmailNotification';
import { SMSNotification } from './SMSNotification';

type NotificationType = 'email' | 'sms';

// The factory method
export function createNotificationService(type: NotificationType): Notification {
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