import mongoose from "mongoose";
import ShopSchema from "./Shop.js";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },

  shop: {
    type: mongoose.Schema.Types.Object,
    ref: "Shop",
  },
});

export default mongoose.model("Product", ProductSchema);
