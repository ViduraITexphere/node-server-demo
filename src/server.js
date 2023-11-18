const express = require("express");
const app = express();
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");
require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

// Define a route
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// Use body-parser middleware
app.use(bodyParser.json());

// Use API routes
app.use(apiRoutes);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
