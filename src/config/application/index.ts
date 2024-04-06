import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routers } from '../routes';

export const app: Application = express();

dotenv.config();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

routers(app);
