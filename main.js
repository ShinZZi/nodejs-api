require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1vjdg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const app = express();
const swagger = require("./swagger");
const PORT = process.env.PORT || 9999;

mongoose
  .connect(MONGO_URI)
  .then((res) => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(Error, "DB Connect Failure");
  });

// Load APIs Docs
swagger(app);

//Middleware to accept CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Middleware for POST and PUT
app.use(express.urlencoded({ extended: true })); //Get body
app.use(express.json());

//Loading Model
const Products = require("./api/models/productModel");

//Loading Routes
const ProductRoutes = require("./api/routes/productRoute");

// Call Product Route
ProductRoutes(app);

app.get("*", (req, res) => {
  res.status("404").send({ url: req.originalUrl + " not found" });
});

app.listen(PORT, () => console.log("Server is running at port: " + PORT));
