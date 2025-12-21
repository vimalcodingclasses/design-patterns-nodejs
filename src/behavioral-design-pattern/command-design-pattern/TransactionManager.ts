export class TransactionManager {
    private commandStack: any;
    constructor() {
        this.commandStack = [];
    }

    execute(command: any) {
        try {
            command.execute();
            this.commandStack.push(command);
        } catch (err: any) {
            console.error(`Error occurred: ${err.message}`);
            this.rollback();
            throw err; // Re-throw to notify caller
        }
    }

    // Executes a batch of commands as a single atomic unit
    executeBatch(commands: any) {
        console.log('--- Starting Transaction ---');
        try {
            for (const cmd of commands) {
                cmd.execute();
                this.commandStack.push(cmd);
            }
            console.log('--- Transaction Committed Successfully ---');
            this.commandStack = []; // Clear stack on success (transaction complete)
        } catch (err: any) {
            console.error(`Transaction Failed: ${err.message}`);
            this.rollback();
        }
    }

    rollback() {
        console.log('--- Rolling Back Transaction ---');
        while (this.commandStack.length > 0) {
            const cmd = this.commandStack.pop();
            cmd.undo();
        }
        console.log('--- Rollback Complete ---');
    }
}