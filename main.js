require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3131;

mongoose
  .connect(process.env.MONGO_SERVER)
  .then((res) => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(Error, "DB Connect Failure");
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Products = require("./api/models/productModel"); //Loading Model
const routes = require("./api/routes/productRoute"); //Loading Routes

routes(app);
app.get("*", (req, res) => {
  res.status("404").send({ url: req.originalUrl + "not found" });
});

app.listen(PORT, () => console.log("Server is running at port: " + PORT));
