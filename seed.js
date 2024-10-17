// seed.js
const mongoose = require('mongoose');
const connectDB = require('./db');
const Book = require('./models/bookModel');

const seedBooks = async () => {
    // await connectDB();

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
