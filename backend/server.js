import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
  console.log("Products");
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.send({ message: "Product Not Found" });
  }
  console.log("Product");
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
