// models/ConcreteMemento.ts
import { Memento, EditorState } from '../types/editor.types';

export class ConcreteMemento implements Memento {
    private state: EditorState;

    constructor(state: EditorState) {
        // CLONE the state to prevent reference issues
        this.state = { ...state };
    }

    public getState(): EditorState {
        return this.state;
    }

    public getDate(): string {
        return this.state.timestamp.toISOString();
    }
}