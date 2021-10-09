import express from 'express';
import authRoutes from './route/auth.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// CLIENT ID 59800431155-ln856d2lga82pcumns75v4773dddqnpi.apps.googleusercontent.com

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect(`${process.env.MONGO_URI}`);

const db = mongoose.connection;
db.once('open', () => console.log('Connected to Mongo DB!!'));
db.on('error', (error) => console.error(error));

app.listen(PORT, () =>
  console.log(`The server is up and running on PORT ${PORT} 🚀`)
);
