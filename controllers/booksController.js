function booksController(bookAPI) {
    function post(req, res) {
        if (!req.body.title) {
            res.status(400)
            return res.send('Title is required');
            // return res.status(400).send('Title is required');
        }
        const book = new bookAPI(req.body);
        book.save();
        return res.status(201).json(book);
    }

    async function get(req, res) {
        try {
            const query = {};
            if (req.query.genre) {
                query.genre = req.query.genre
            }
            const books = await bookAPI.find(query)
            return res.json(books)
        }
        catch (err) {
            return res.status(500).json({ message: 'Get books error' });
        }

    }

    return { post, get };
}

module.exports = booksController;