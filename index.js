import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);
app.use('/cards', cardRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});