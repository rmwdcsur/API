const express = require('express');
const connectDB = require('./DB/mongoDB'); // import the method

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Import routes file
const routes = require('./routes/index');

// Use routes
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});