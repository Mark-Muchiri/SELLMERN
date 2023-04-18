import mongoose from "mongoose";

const productSchema = mongoose.Schema({
   userOwner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user"
   },
   name: {
      type: String,
      required: [ true, "please add a product name" ]
   },
   imageUrl: { type: String, require: [ true, "please add an product image URL" ] },
   description: {
      summary: { type: String, require: [ true, "please add a product description summary" ] },
      description: { type: String },
   },
   size: { type: String },
   color: { type: String },
   prize: { type: String },
   quantity: { type: String },
},
   {
      timestamps: true
   }
);

export const ProductModel = mongoose.model("products", productSchema);
