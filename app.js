const express = require('express');

const app = express();
const bookModel = require('./models/bookModel');
const db = require('./db');
const bodyParser = require('body-parser');
db();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
// const env = process.env.ENV = 'development';

// const bookRouter = require('./routes/bookRouter')
// app.use('/api', bookRouter);
const baseRouter = require('./routes/baseRouter')(bookModel)
app.use('/api', baseRouter);

// const bookRouter = express.Router();
// const bookAPI = require('./models/bookModel');
// creating route// const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/books';
// mongoose.connect(url);
// const bookRouter = express.Router();
// bookRouter.route('/books')
//     .get((req, res) => {
//             bookAPI.find().then((err, books) => {
//             bookAPI.find(query, (err, books) => {
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

app.get('/', (req, res) => {
    res.send("Welcome to nodemon api! ");
})

app.server = app.listen(port, () => {
    console.log('Running on port: ' + port);
})
module.exports = app;