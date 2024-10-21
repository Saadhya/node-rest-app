<!-- RESTful Web Services with Node.js and Express by PLURALSIGHT -->
# features
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
- get, post, put, patch
- 
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


