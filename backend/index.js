import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routeApp from './routes/routes.js';
import dbConnect from './db/dbConnect.js';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

dbConnect();

app.use('/api', routeApp);
const __direname = path.resolve();
app.use(express.static(path.join(__direname,"frontend/build")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__direname,"frontend","build","index.html"))
});


app.listen(process.env.PORT, () => {
    console.log(`server runs on port ${process.env.PORT}`);
})