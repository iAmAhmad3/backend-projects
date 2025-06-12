import express from 'express';
import Order from '../models/Order.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { books } = req.body; 
    const order = new Order({
      user: req.user.userId,
      books
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all orders for the logged-in user
router.get('/my', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId }).populate('books.book');
    res.json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
