import { ICommand } from "./ICommand";

export class DepositCommand implements ICommand {
    constructor(private service: any, private user: any, private amount: any) {
        this.service = service;
        this.user = user;
        this.amount = amount;
    }

    execute() {
        this.service.deposit(this.user, this.amount);
    }

    undo() {
        console.log(`↺ Undoing deposit for ${this.user}...`);
        this.service.withdraw(this.user, this.amount); // Inverse operation
    }
}