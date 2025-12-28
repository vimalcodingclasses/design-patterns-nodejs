import { EventEmitter } from 'events';
import TypedEmitter from 'typed-emitter';

class Mediator extends (EventEmitter as new () => TypedEmitter<any>) {

    constructor() {
        super();
        this.setupListeners();
    }

    private setupListeners(): void {
        this.on('user:registered', (user: any) => {
            console.log(`[Mediator] LOG: User ${user.id} registered.`);
        });
    }
}

export const appMediator = new Mediator();