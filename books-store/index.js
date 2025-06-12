import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import bookRoutes from './routes/books.js';
import userRoutes from './routes/users.js';
import orderRoutes from './routes/orders.js';

const app = express();
app.use(express.json());

dotenv.config();

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Book Store API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
