import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { UserRoutes } from './models/user/user.routes.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', UserRoutes);

app.get('/', (req, res) => {
  res.send('Server running');
});

export default app;
