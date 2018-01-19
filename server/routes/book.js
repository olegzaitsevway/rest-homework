import express, { Router } from 'express';
import Book from '../data/models/book';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await Book.find());
});

router.post('/', async (req, res) => {
  res.send(await Book.create(req.body));
});

router
  .get('/:id', async (req, res) => {
    res.send(await Book.find({_id: req.params.id}));
  })
  .put('/:id', async (req, res) => {
    const book = Book.find({_id: req.params.id});
    res.send(await Book.update(book, req.body));
  })
  .delete('/:id', async (req, res) => {
    const book = Book.find({_id: req.params.id});
    res.send(await Book.deleteOne(book));
  });

export default router;