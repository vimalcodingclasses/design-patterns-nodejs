// All notification types must implement this contract
export interface INotification {
    send(recipient: string, message: string): void;
}