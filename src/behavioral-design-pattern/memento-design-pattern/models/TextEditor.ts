// models/TextEditor.ts
import { Memento, EditorState } from '../types/editor.types';
import { ConcreteMemento } from './ConcreteMemento';

export class TextEditor {
    private state: EditorState;

    constructor() {
        this.state = {
            content: "",
            timestamp: new Date()
        };
    }

    // Business Logic: changing the text
    public setContent(content: string): void {
        this.state = {
            content,
            timestamp: new Date()
        };
        console.log(`[Originator] State changed to: ${content}`);
    }

    public getContent(): string {
        return this.state.content;
    }

    // Saves the current state inside a Memento
    public save(): Memento {
        console.log('[Originator] Saving state...');
        return new ConcreteMemento(this.state);
    }

    // Restores the state from a Memento
    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`[Originator] State restored to: ${this.state.content}`);
    }
}