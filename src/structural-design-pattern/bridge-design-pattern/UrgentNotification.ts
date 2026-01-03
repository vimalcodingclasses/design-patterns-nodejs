import { Notification } from "./Notification";

/**
 * REFINED ABSTRACTION B
 * An urgent notification might add formatting or high-priority flags.
 */
export class UrgentNotification extends Notification {
    public send(body: string, user: string): void {
        console.log("--- Processing URGENT Notification ---");
        const formattedBody = `[URGENT] ${body.toUpperCase()}`;
        this.provider.connect();
        this.provider.sendMessage(formattedBody, user);
    }
}