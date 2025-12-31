// models/HistoryManager.ts
import { Memento } from '../types/editor.types';

export class HistoryManager {
    private mementos: Memento[] = [];
    private static instance: HistoryManager;

    // Singleton for demo purposes (keeps state across requests)
    private constructor() { }

    public static getInstance(): HistoryManager {
        if (!HistoryManager.instance) {
            HistoryManager.instance = new HistoryManager();
        }
        return HistoryManager.instance;
    }

    public backup(memento: Memento): void {
        this.mementos.push(memento);
    }

    public undo(): Memento | null {
        if (this.mementos.length === 0) {
            return null;
        }
        const memento = this.mementos.pop();
        return memento || null;
    }

    public showHistory(): void {
        console.log("Current History Stack:");
        this.mementos.forEach(m => console.log(m.getDate()));
    }
}