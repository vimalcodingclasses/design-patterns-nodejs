import { BankService } from "./BankService";
import { DepositCommand } from "./DepositCommand";
import { TransactionManager } from "./TransactionManager";
import { WithdrawCommand } from "./WithdrawCommand";

//success scenario================================
const service = new BankService();
const manager = new TransactionManager();

console.log(`Initial State: Alice: $${service.getBalance('alice')}, Bob: $${service.getBalance('bob')}`);

// Transfer $100 from Alice to Bob
const transaction1 = [
    new WithdrawCommand(service, 'alice', 100),
    new DepositCommand(service, 'bob', 100)
];

manager.executeBatch(transaction1);

// Final: Alice: 900, Bob: 100

//failure scenario================================

console.log('\n\n--- Attempting Faulty Transfer ---');

// Alice tries to send money to Charlie (who doesn't exist)
// 1. Withdraw from Alice (Will Succeed)
// 2. Deposit to Charlie (Will Fail)
const transaction2 = [
    new WithdrawCommand(service, 'alice', 500),
    new DepositCommand(service, 'charlie', 500) // 'charlie' is not in DB
];

manager.executeBatch(transaction2);

console.log(`Final State: Alice: $${service.getBalance('alice')}, Bob: $${service.getBalance('bob')}`);