// types/editor.types.ts

// The state we want to save
export interface EditorState {
    content: string;
    timestamp: Date;
}

// The Memento interface
export interface Memento {
    getState(): EditorState;
    getDate(): string;
}