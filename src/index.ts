import express from 'express';
import authRoutes from './route/auth.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect(`${process.env.MONGO_URI}`);

const db = mongoose.connection;
db.once('open', () => {
  app.listen(PORT, () =>
    console.debug(`The server is up and running on PORT ${PORT} 🚀`)
  );
});
db.on('error', (error) => {
  console.error('Failed connection to ' + `${process.env.MONGO_URI}`);
  console.error(error);
});

