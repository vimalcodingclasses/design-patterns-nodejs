import express, { Request, Response } from 'express';

/*Creational design pattern*/
// import './creational-design-pattern/singleton-design-pattern';
// import './creational-design-pattern/factory-design-pattern';
// import './creational-design-pattern/abstract-factory-design-pattern';
// import './creational-design-pattern/builder-design-pattern';
// import './creational-design-pattern/prototype-design-pattern';

/*Behavioral design pattern*/
// import './behavioral-design-pattern/strategy-design-pattern/client';
// import './behavioral-design-pattern/chainOfResponsibilities-design-pattern/client';
// import './behavioral-design-pattern/observer-design-pattern/client';
// import './behavioral-design-pattern/command-design-pattern/client';
// import './behavioral-design-pattern/interpreter-design-pattern/client';
// import './behavioral-design-pattern/iterator-design-pattern/client';
// import './behavioral-design-pattern/mediator-design-pattern/client';
// import './behavioral-design-pattern/template-design-pattern/client';
import './behavioral-design-pattern/visitor-design-pattern/client';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});