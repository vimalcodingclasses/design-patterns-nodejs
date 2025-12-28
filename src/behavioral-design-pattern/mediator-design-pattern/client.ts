import { AnalyticsService } from "./AnalyticsService";
import { EmailService } from "./EmailService";
import { UserController } from "./UserController";

new EmailService();
new AnalyticsService();

const req: any = { body: { name: 'vs', email: 'vs@gmail.com' } };
const res: any = {};
UserController.register(req, res);