const mongoose = require('mongoose');

// MongoDB automatically generates the '_id' field as an ObjectId by default, so you do not need to manually define it in the schema.
const bookSchema = new mongoose.Schema({
    // trim: true automatically strips accidental leading or trailing whitespace from text fields before saving to the database
    title: { type: String, required: true, trim: true},
    author: { type: String, required: true, trim: true},
    category: { type: String, required: true, trim: true},
    publishedYear: { type: Number, required: true, validate: {
        validator: function(value){
            const currentYear = new Date().getFullYear();
            return Number.isInteger(value) && value >= 1450 && value <= currentYear;
        },
        message: (props) => `${props.value} is not a valid publication year!`
    } },
    available: { type: Boolean, default: true }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;