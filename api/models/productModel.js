const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: "Enter product name",
  },
  price: {
    type: mongoose.Types.Decimal128,
  },
  rating: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", productSchema);
