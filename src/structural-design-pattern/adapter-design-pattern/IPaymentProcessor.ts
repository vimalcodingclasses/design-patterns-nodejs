// The interface your application expects
export interface IPaymentProcessor {
    pay(amount: number, currency: string): void;
}