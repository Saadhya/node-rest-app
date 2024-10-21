const bookRouter = require('express').Router();
const bookAPI = require('../models/bookModel');

bookRouter.route('/addbook')
    .post((req, res) => {
        const book = new bookAPI(req.body);
        // console.log(book);
        book.save();
        return res.status(201).json(book);
    })

// http://localhost:4000/api/book/6713572856a3ecbb6ad7a47b
bookRouter.get('/books/:bookId', async (req, res) => {
    try {
        const book = await bookAPI.findById(req.params.bookId);
        return res.json(book);
    } catch (err) {
        return res.status(500).json({ message: 'By id error' });
    }
});
// http://localhost:4000/api/books?genre=fantasy or without genre

bookRouter.get('/books', async (req, res) => {
    try {
        const query = {};
        if (req.query.genre) {
            query.genre = req.query.genre
        }
        const books = await bookAPI.find(query);
        return res.json(books);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
});

// http://localhost:4000/api/books- base
// bookRouter.get('/books', async (req, res) => {
//     try {
//         const books = await bookAPI.find();
//         return res.json(books);
//     } catch (err) {
//         return res.status(500).json({ message: 'Server error' });
//     }
// });

module.exports = bookRouter;