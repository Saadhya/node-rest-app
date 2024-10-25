<!-- RESTful Web Services with Node.js and Express by PLURALSIGHT -->
# features
- what REST is?
- REST verbs- GET/PUT/POST/DELETE/PATCH
- multiple router calls in app file
- implemented HTTP post req 
- added a new item to the list
- tested with postman
- code cleanup

# build a RESTful API with Node.js and Express
- implement HTTP PUT and Patch verbs
- PUT replaces an item
- PATCH only changes a piece
- middleware
- implement HTTP Delete verb

# middleware
- client-req-middleware-req-route
- route return response to the client
- get, post, put, patch, delete done
- PUT replaces an item
- PATCH only changes a piece
- Middleware

# controller
- create controllers

# testing- unit and integration using MOCHA
- Unit Testing with Mocha
(npm install -D mocha should sinon) => here -D makes it a dev dependency
- building controllers for your routes
- mock objects with sinon.js
- mock adds some functions & methods to our functions to check what's happeing inside those function and its function call
- Integration test with supertest
npm install supertest -D
- to run tests- ( npm t or npm test)

# HATEOAS
- what is HATEOAS
- Using HyperMdia
- Self documenting API
- hypermedia- it is to make our API somewhat self-documenting
- self documenting API

# using promise
 await req.book.save()
    .then(resp => {
        return res.json(resp)
    })
    .catch(err => {
        if (err) {
            return res.send("error : " + err);
        }
    })

# using async/await
async function saveData() {
    const document = new Model(data);
    try {
        const result = await document.save();
        console.log('Document saved:', result);
    } catch (error) {
        console.error('Error saving document:', error);
    }
}

saveData();

# using a query:-
async function deleteBook(req, res) {
    try {
        const result = await BookModel.deleteOne({ _id: req.params.id }); // Use the appropriate ID
        res.status(200).json({ message: 'Book deleted', result });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting book' });
    }
}



