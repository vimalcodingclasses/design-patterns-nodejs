import express, { Request, Response } from 'express';

import './singleton-design-pattern';
import './factory-design-pattern';
import './abstract-factory-design-pattern';
import './builder-design-pattern';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});