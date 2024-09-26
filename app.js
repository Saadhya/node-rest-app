const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// creating router
const bookRouter = express.Router();
bookRouter.get((req, res)=>{
    const resp = {hello:'this is my API'};
    res.json(resp);
})
app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send("Welcome to nodemon api! ");
})

app.listen(port, () => {
    console.log('Running on port: ' + port);
})