import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  publishedYear: Number,
  price: Number,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
