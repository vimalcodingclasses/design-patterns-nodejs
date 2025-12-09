import EventEmitter from "events";

export class DataStream extends EventEmitter {
    private data: any;

    constructor(private name: string) {
        super();
        this.name = name;
        this.data = 0;
    }

    // Method to change the state and notify observers
    publishData(newValue: any) {
        this.data = newValue;
        console.log(`[SUBJECT] ${this.name} state changed to: ${this.data}`);

        // The core of the Observer Pattern: emit() notifies all attached listeners
        this.emit('dataUpdate', this.data);
    }
}