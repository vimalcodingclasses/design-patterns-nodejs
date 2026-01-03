import { Notification } from "./Notification";

/**
 * REFINED ABSTRACTION A
 * A standard notification just sends the message as is.
 */
export class StandardNotification extends Notification {
    public send(body: string, user: string): void {
        console.log("--- Processing Standard Notification ---");
        this.provider.connect();
        this.provider.sendMessage(body, user);
    }
}