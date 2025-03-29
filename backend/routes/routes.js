import express from 'express';
import { getPatients, registerPatient, sendMail } from '../controllers/controller.js';

const app = express();

app.post('/sendMail',sendMail);
app.post('/register',registerPatient);
app.get('/patients',getPatients);

export default app;