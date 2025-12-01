// All notification types must implement this contract
export interface Notification {
    send(recipient: string, message: string): void;
}