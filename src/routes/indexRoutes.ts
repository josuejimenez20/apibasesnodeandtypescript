import express from 'express';
import userRouter from '../routes/UserRoutes/UserRoutes';

const app = express();

app.use('/users', userRouter);

export default app;

