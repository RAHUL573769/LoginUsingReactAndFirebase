const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const productData = require("./products.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.send(productData);
});
app.get("/products/:id", (req, res) => {
  const pid = req.params.id;
  const specificProduct = productData.find((x) => pid);
  res.send(specificProduct);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
