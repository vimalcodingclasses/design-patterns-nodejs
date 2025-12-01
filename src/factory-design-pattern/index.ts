import { createNotificationService } from './NotificationFactory';

// Client code asks the factory for a service based on a requirement
const emailSender = createNotificationService('email');
const smsSender = createNotificationService('sms');

// Client code interacts with the generic Notification interface
emailSender.send('user@example.com', 'Your order has shipped.');
smsSender.send('+1234567890', 'Your verification code is 4567.');

// Output:
// [EMAIL] Sending to user@example.com: Your order has shipped.
// [SMS] Sending to +1234567890: Your verification code is 4567.