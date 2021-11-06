module.exports = (app) => {
  const productController = require("../controllers/productController");

  app
    .route("/api/products")
    .get(productController.list_all_products)
    .post(productController.create_new_product);

  app
    .route("/api/products/:ProdID")
    .get(productController.read_product)
    .patch(productController.update_product)
    .delete(productController.remove_product);
};
