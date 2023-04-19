import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from "./routes/users.js";
import { productsRouter } from "./routes/products.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productsRouter);

mongoose.connect(
   "mongodb+srv://mark:mark123@recipe.actgqyi.mongodb.net/recipe?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log(("Server started!")));


// hioioerfioerfe