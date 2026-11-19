const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Library Management System API is running");
});

module.exports = app;