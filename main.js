require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://long123:l123@cluster0.1vjdg.mongodb.net/demo?retryWrites=true&w=majority";
const app = express();

const PORT = process.env.PORT || 3131;

mongoose
  .connect(MONGO_URI)
  .then((res) => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(Error, "DB Connect Failure");
  });

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Loading Model
const Products = require("./api/models/productModel");
//Loading Product Routes
const ProductRoutes = require("./api/routes/productRoute");

ProductRoutes(app);
app.get("*", (req, res) => {
  res.status("404").send({ url: req.originalUrl + "not found" });
});

app.listen(PORT, () => console.log("Server is running at port: " + PORT));
