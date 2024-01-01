import express from "express";
import data from "./data.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Db success"))
  .catch((error) => console.log(error.message));

const app = express();
app.use(cors());

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
