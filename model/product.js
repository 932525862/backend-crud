const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  model:String,
});

exports.Product = mongoose.model("Product", ProductSchema);
