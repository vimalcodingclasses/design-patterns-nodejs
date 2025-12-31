// app.ts
import express, { Request, Response } from 'express';
import { TextEditor } from './behavioral-design-pattern/memento-design-pattern/models/TextEditor';
import { HistoryManager } from './behavioral-design-pattern/memento-design-pattern/models/HistoryManager';

const app = express();
app.use(express.json());

// Initialize our objects
const editor = new TextEditor();
const caretaker = HistoryManager.getInstance();

// 1. Route to update content (Save state first, then update)
app.post('/write', (req: Request, res: Response) => {
    const { text } = req.body;

    // BEFORE changing state, save the current state to history
    caretaker.backup(editor.save());

    // Now perform the business logic
    editor.setContent(text);

    res.json({
        message: "Content updated",
        currentContent: editor.getContent()
    });
});

// 2. Route to Undo changes
app.post('/undo', (req: Request, res: Response) => {
    const memento = caretaker.undo();

    if (!memento) {
        return res.status(400).json({ message: "Nothing to undo!" });
    }

    // Restore the editor to the state found in the memento
    editor.restore(memento);

    res.json({
        message: "Undone successfully",
        currentContent: editor.getContent()
    });
});

// 3. Route to view current state
app.get('/current', (req: Request, res: Response) => {
    res.json({ content: editor.getContent() });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});