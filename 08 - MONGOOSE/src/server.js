import express from "express";
import { initMongoDB } from "./config/db-connection.js";
import productRouter from "./routes/product-router.js";
import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter)

app.use(errorHandler)

initMongoDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(8080, () => console.log("Server running on port 8080"));