const mongoose = require("mongoose");
const Products = mongoose.model("Products");

exports.list_all_products = (req, res) => {
  Products.find({}, (err, product) => {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.create_new_product = (req, res) => {
  let new_product = new Products(req.body);
  new_product.save((err, product) => {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.read_product = (req, res) => {
  Products.findById(req.params.ProdID, (err, product) => {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.update_product = (req, res) => {
  Products.findOneAndUpdate(
    { _id: req.params.ProdID },
    req.body,
    { new: true },
    (err, product) => {
      if (err) res.send(err);
      res.json(product);
    }
  );
};

exports.remove_product = (req, res) => {
  Products.deleteOne({ _id: req.params.ProdID }, (err, product) => {
    if (err) res.send(err);
    res.json({ message: "Product successfully deleted" });
  });
};
