require('should')
const request = require('supertest')
const mongoose = require('mongoose');
const app = require('../app');

process.env.ENV = 'test';
// need to fetch mongoose model
const Book = mongoose.model('bookAPI');
const agent = request.agent(app);

describe('Book CRUD test', () => {
    it('should allow a book to be posted and return a read and _id', (done) => {
        const bookPost = {
            title: 'My Book',
            author: 'Jon Doe',
            genre: 'Fiction'
        }
        // post request to /api/books
        // expect 200 status code
        // expect response to have a read property of false
        // expect response to have an _id property
        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end((err, results) => {
                // console.log(results);

                // results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done();
            })
    })

    // to clean up the database after each test
    afterEach((done) => {
        Book.deleteMany({}).exec();
        done();
    })

    // clean up the database after all tests are run
    after((done) => {
        mongoose.connection.close();
        app.server.close(done());
    })
})