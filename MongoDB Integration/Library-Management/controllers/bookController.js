const Book = require('../models/bookModel');
const mongoose = require('mongoose');
const fields = ["title", "author", "category", "publishedYear", "available"];

function isValidId(id, res) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ success: false, message: 'Invalid book ID' });
        return false;
    }
    return true;
}

function validatePayload(data, partial = false) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        return "JSON object required";
    }
    const keys = Object.keys(data);
    if (keys.some(key => !fields.includes(key))) {
        return "Unknown book field";
    }
    if (partial && keys.length === 0) {
        return "Atleast one field is required";
    }
    if (!partial && fields.some(key => !Object.hasOwn(data, key))) {
        return "All book fields are required";
    }
    return null;
}

// GET: all books
async function getBooks(req, res, next) {
    try {
        const books = await Book.find();
        res.json({ success: true, count: books.length, data: books });
    } catch (error) {
        // res.status(500).json({ success: false, data: "Server Error" });
        // passing error to the middleware
        next(error);
    }
}

async function getBookById(req, res, next) {
    if (!isValidId(req.params.id, res))
        return;
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.json({ success: true, data: book });
    } catch (error) {
        next(error);
    }
}

async function searchBooks(req, res, next) {
    const title = req.query.title;
    if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({ success: false, message: "Query parameter 'title' is required" });
    }
    try {
        const books = await Book.find({
            title: { $regex: title.trim(), $options: 'i' }
        });
        res.json({ success: true, count: books.length, data: books });
    } catch (error) {
        next(error);
    }
}

async function getAvailableBooks(req, res, next) {
    try {
        const books = await Book.find({ available: true });
        res.json({ success: true, count: books.length, data: books });
    } catch (error) {
        next(error);
    }
}

async function createBook(req, res, next) {
    const error = validatePayload(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error });
    }
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ success: true, message: "Book created successfully", data: book });
    } catch (error) {
        next(error);
    }
}

async function replaceBook(req, res, next) {
    if (!isValidId(req.params.id, res))
        return;
    const error = validatePayload(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error });
    }
    const bookData = { ...req.body };
    if (!Object.hasOwn(bookData, 'available')) {
        bookData.available = true;
    }

    try {
        const book = await Book.findOneAndReplace(
            { _id: req.params.id },
            bookData,
            { new: true, runValidators: true }
        );

        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.json({ success: true, message: "Book replaced successfully", data: book });
    } catch (error) {
        next(error);
    }
}

async function patchBook(req, res, next) {
    if (!isValidId(req.params.id, res))
        return;
    const error = validatePayload(req.body, true);
    if (error) {
        return res.status(400).json({ success: false, message: error });
    }
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.json({ success: true, message: "Book updated successfully", data: book });
    } catch (error) {
        next(error);
    }
}

async function deleteBook(req, res, next) {

    if (!isValidId(req.params.id, res))
        return;
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.json({ success: true, message: "Book deleted successfully" });
    } catch(error){
        next(error);
    }
    
}

module.exports = {
    getBooks, getBookById, searchBooks, getAvailableBooks, createBook, replaceBook, patchBook, deleteBook
};