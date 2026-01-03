import { EmailProvider } from "./EmailProvider.";
import { SMSProvider } from "./SMSProvider";
import { StandardNotification } from "./StandardNotification";
import { UrgentNotification } from "./UrgentNotification";

function runClient() {
    const userEmail = "dev@example.com";
    const userPhone = "+1234567890";

    // 1. Create the Implementations
    const emailProvider = new EmailProvider();
    const smsProvider = new SMSProvider();

    // 2. Bridge them with Abstractions

    // Scenario A: Urgent Message via Email
    const urgentEmail = new UrgentNotification(emailProvider);
    urgentEmail.send("Server is down!", userEmail);

    console.log("\n");

    // Scenario B: Standard Message via SMS
    const standardSMS = new StandardNotification(smsProvider);
    standardSMS.send("Meeting at 3 PM", userPhone);
}

runClient();