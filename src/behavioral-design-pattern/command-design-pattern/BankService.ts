// A simple in-memory mock database
const database: any = {
    'alice': 1000,
    'bob': 0
};

export class BankService {
    deposit(user: any, amount: any) {
        if (!database.hasOwnProperty(user)) throw new Error(`User ${user} not found`);
        database[user] += amount;
        console.log(`[DB] Deposited $${amount} to ${user}. New Balance: ${database[user]}`);
    }

    withdraw(user: any, amount: any) {
        if (!database.hasOwnProperty(user)) throw new Error(`User ${user} not found`);
        if (database[user] < amount) throw new Error(`[DB] Insufficient funds for ${user}`);

        database[user] -= amount;
        console.log(`[DB] Withdrew $${amount} from ${user}. New Balance: ${database[user]}`);
    }

    getBalance(user: any) {
        return database[user];
    }
}