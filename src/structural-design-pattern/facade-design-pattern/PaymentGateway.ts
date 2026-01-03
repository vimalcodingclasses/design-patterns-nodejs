// Subsystem 2: Payment
export class PaymentGateway {
    public verifyCard(details: string): boolean {
        console.log(`Verifying card details...`);
        return true;
    }

    public charge(amount: number): void {
        console.log(`Charging customer $${amount}`);
    }
}