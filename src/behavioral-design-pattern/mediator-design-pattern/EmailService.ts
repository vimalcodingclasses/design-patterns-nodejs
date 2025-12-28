import { appMediator } from './AppMediator';

export class EmailService {
    constructor() {
        appMediator.on('user:registered', this.sendWelcomeEmail);
    }

    private sendWelcomeEmail = async (user: any) => {
        console.log(`[EmailService] Sending email to ${user.email}...`);
    }
}
