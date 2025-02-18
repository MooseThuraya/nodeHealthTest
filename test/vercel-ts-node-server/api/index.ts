import express, { Request, Response } from 'express';

const app = express();

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
