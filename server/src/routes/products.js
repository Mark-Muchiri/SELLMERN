import express from "express";
import mongoose from "mongoose";
import { ProductModel } from "../models/Products.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
   try {
      const response = await ProductModel.find({});
      res.json(response);
   } catch (err) {
      res.json(err);
   }
});


router.post("/", async (req, res) => {
   const product = new ProductModel(req.body);
   try {
      const response = await product.save();
      res.json(response);
   } catch (err) {
      res.json(err);
   }
});


router.put("/", async (req, res) => {
   try {
      const product = await ProductModel.findById(req.body.productID);
      const user = await UserModel.findById(req.body.userID);
      user.savedProducts.push(product);
      await user.save();
      res.json({ savedProducts: user.savedProducts });
   } catch (err) {
      res.json(err);
   }
});


router.get("/savedProducts/ids/:userID", async (req, res) => {
   try {
      const user = await UserModel.findById(req.params.userID);
      res.json({ savedProducts: user?.savedProducts });
   } catch (err) {
      res.json(err);
   }
});


router.get("/savedProducts/:userID", async (req, res) => {
   try {
      const user = await UserModel.findById(req.params.userID);
      const savedProducts = await ProductModel.find({
         _id: { $in: user.savedProducts },
      });
      res.json({ savedProducts });
   } catch (err) {
      res.json(err);
   }
});

export { router as productsRouter };