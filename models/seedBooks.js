// seed.js
const mongoose = require('mongoose');
const connectDB = require('../db');
const Book = require('./bookModel');

const seedBooks = async () => {
    await connectDB();

    const books = [
        { title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Dystopian' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960, genre: 'Fiction' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925, genre: 'Classic' },
    ];

    await Book.insertMany(books);
    console.log('Books seeded!');
    mongoose.connection.close();
};

seedBooks().catch(console.error);


// async function insert(){
//     await bookAPI.create({
//         title: 'Les Miserable',
//         genre: 'fantasy',
//         author: 'Victor Hugo',
//         read: false
//         // name: 'Saadhya',
//         // email: 'saadhya.cte@gmail.com'
//     })
// }
// insert();

