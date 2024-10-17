const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/books/bookAPI';
// mongodb://localhost:27017/
mongoose.connect(url);

const app = express();
// const mongoConnect = require('./mongoConnect');

const port = process.env.PORT || 3000;
const bookAPI = require('./models/bookModel')

app.get('/books', async (req, res) => {
    try {
        const books = await bookAPI.find();
        return res.json(books);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
});

// const bookRouter = express.Router();
// creating router
// bookRouter.route('/books')
//     .get((req, res) => {
//             console.log("bookm : " + bookAPI.find());
//             bookAPI.find().then((err, books) => {
//             if (err) {
//                 console.log(err);

//                 return res.send(err);
//             }
//             console.log("books : " + books);
//             return res.json(books);
//         })
//         // const resp = {hello:'This is my API'};
//         // res.json(resp);
//     });
// app.use('/api', bookRouter);
//http://localhost:4000/api/Books 



app.get('/', (req, res) => {
    res.send("Welcome to nodemon api! ");
})

app.listen(port, () => {
    console.log('Running on port: ' + port);
})