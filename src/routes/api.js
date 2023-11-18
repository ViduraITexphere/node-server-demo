const express = require("express");
const axios = require("axios");
const router = express.Router();
const Product = require("../models/product");
const bodyParser = require("body-parser");

// Use body-parser middleware
router.use(bodyParser.json());

// save product
router.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json({
      success: "Product saved successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
