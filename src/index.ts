import express from 'express';
import authRoutes from './route/auth.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

console.debug('Attempting connection to ' + `${process.env.MONGO_URI}`);
mongoose.connect(`${process.env.MONGO_URI}`);

const db = mongoose.connection;
db.once('open', () => console.debug('Connected to Mongo DB!!'));
db.on('error', (error) => console.error(error));

app.listen(PORT, () =>
  console.debug(`The server is up and running on PORT ${PORT} 🚀`)
);
