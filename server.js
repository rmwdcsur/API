const express = require("express");
const connectDB = require("./DB/mongoDB");
const swaggerAutogen = require("swagger-autogen")();

const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Allow cors origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes file
const routes = require("./routes/index");

// Use routes
app.use("/", routes);

// Serve Swagger UI properly
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
