import express from 'express';
import payment from './routes/processRoute.js';

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/v1",payment)
export default app;