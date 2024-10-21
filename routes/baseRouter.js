/* eslint-disable no-param-reassign */
const express = require('express');

function routes(bookAPI) {
    const baseRouter = express.Router();

    baseRouter.route('/books')
        .post((req, res) => {
            // console.log("post: "+req.body);
            const book = new bookAPI(req.body);
            book.save();
            return res.status(201).json(book);
        })
        .get(async (req, res) => {
            try {
                const query = {};
                if (req.query.genre) {
                    query.genre = req.query.genre;
                }
                const books = await bookAPI.find(query);
                return res.json(books);
                // bookAPI.find(query, (err, books) => {
                //     if (err) {
                //         return res.send(err)
                //     }
                //     return res.json(books);
                // })
            } catch (err) {
                return res.status(500).json({ message: 'Get books error' });
            }
        })

    // working for fetcing book by id- default method is GET
    baseRouter.use('/books/:bookId', async (req, res, next) => {
        // console.log("update " + JSON.stringify(req.params));
        try {
            const book = await bookAPI.findById(req.params.bookId)
            if (book) {
                req.book = book;
                return next();
            }
            return res.json(book)
        } catch (err) {
            return res.status(500).json({ message: 'fetch books error' });
        }
    })
    baseRouter.route('/books/:bookId')
        .get(async (req, res) => {
            try {
                const book = await bookAPI.findById(req.params.bookId)
                return res.json(book)
            } catch (err) {
                return res.status(500).json({ message: 'Get books error' });
            }
        })
        // update book
        .put(async (req, res) => {
            try {
                const book = await bookAPI.findById(req.params.bookId)
                book.title = req.body.title,
                    book.genre = req.body.genre,
                    book.author = req.body.author,
                    book.read = req.body.read,
                    await book.save();
                return res.status(200).json(book);

            } catch (err) {
                return res.status(500).json({ message: 'update books error' });
            }

        })
        // patch book with bookid and read-false/true
        .patch((req, res) => {
            const { book } = req;
            // eslint-disable-next-line no-underscore-dangle
            if (req.body._id) {
                // eslint-disable-next-line no-underscore-dangle
                delete req.body._id
            }
            Object.entries(req.body).forEach((item) => {
                const key = item[0];
                const value = item[1];
                book[key] = value;
            })
            // promise- because callback is removed 
            req.book.save()
                .then(resp => {
                    return res.json(resp)
                })
                .catch(err => {
                    if (err) {
                        return res.send("error : " + err);
                    }
                })
        })
        .delete((req, res) => {
            // console.log("delete " + req.book);
            // const book = bookAPI.findById(req.params.bookId);
            // book.then(resp => {
            //         if (!resp) {
            //             return res.status(404).send("Book not found");
            //         }
            //         // Now that we have the book, delete it
            //         return book.remove(); // or book.remove();
            //     })
            //     .then(() => res.status(204))
            //     .catch(err => {
            //         return res.send("erro " + err)
            //     })
            bookAPI.deleteOne({ _id: req.params.bookId })
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.status(404).send("Book not found");
                    }
                    res.status(204).send(); // Send a no-content response
                })
                .catch(err => {
                    console.error("Error deleting book:", err);
                    return res.status(500).send("Error: " + err);
                });
        })

    // http://localhost:4000/api/book/6713572856a3ecbb6ad7a47b
    // baseRouter.get('/books/:bookId', async (req, res) => {
    //     try {
    //         const book = await bookAPI.findById(req.params.bookId);
    //         return res.json(book);
    //     } catch (err) {
    //         return res.status(500).json({ message: 'By id error' });
    //     }
    // });

    // http://localhost:4000/api/books?genre=fantasy or without genre

    // baseRouter.get('/books', async (req, res) => {
    //     try {
    //         const query = {};
    //         if (req.query.genre) {
    //             query.genre = req.query.genre
    //         }
    //         const books = await bookAPI.find(query);
    //         return res.json(books);
    //     } catch (err) {
    //         return res.status(500).json({ message: 'Server error' });
    //     }
    // });

    // to return baseRouter out of routes
    return baseRouter;
}
module.exports = routes;