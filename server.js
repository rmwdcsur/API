const express = require("express");
const connectDB = require("./DB/mongoDB");

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes file
const routes = require("./routes/index");

// Use routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
