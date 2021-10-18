module.exports = (app) => {
  const productList = require("../controllers/productController");

  app.route("/").get(productList.list_all_products);

  app
    .route("/api/products")
    .get(productList.list_all_products)
    .post(productList.create_new_product);

  app
    .route("/api/products/:ProdID")
    .get(productList.read_product)
    .put(productList.update_product)
    .delete(productList.remove_product);
};
