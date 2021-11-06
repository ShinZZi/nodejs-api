const mongoose = require("mongoose");
const Products = mongoose.model("Products");

// Retrive all products
exports.list_all_products = (req, res) => {
  Products.find({}, (err, product) => {
    if (err) res.send(err);
    res.json(product);
  });
};

// Create new product
exports.create_new_product = (req, res) => {
  // Validate data
  if (!req._body || Object.keys(req.body).length !== 3)
    res.status(500).send({ message: "Error while creating new product." });
  else {
    // Convert Data type
    req.body.price = parseFloat(req.body.price);
    req.body.rating = parseInt(req.body.rating, 6);
    // Create data base on model schema
    let new_product = new Products(req.body);
    new_product.save((err, product) => {
      if (err) res.send(err);
      res.json(product);
    });
  }
};

// Retrive product by id
exports.read_product = (req, res) => {
  Products.findById(req.params.ProdID, (err, product) => {
    if (err) res.send(err);
    res.json(product);
  });
};

// Update product by id
exports.update_product = (req, res) => {
  // Validate Data
  if (!req._body)
    res.status(500).send({ message: "Error while updating product." });
  else {
    // Convert Data type
    if (req.body.price) req.body.price = parseFloat(req.body.price);
    if (req.body.rating) req.body.rating = parseInt(req.body.rating, 6);
    Products.findByIdAndUpdate(req.params.ProdID, req.body, (err, product) => {
      if (err) res.send(err);
      res.send(`Updated product ${req.params.ProdID}`);
    });
  }
};

exports.remove_product = (req, res) => {
  Products.deleteOne({ _id: req.params.ProdID }, (err, product) => {
    if (err) res.send(err);
    res.json({ message: "Product successfully deleted" });
  });
};
