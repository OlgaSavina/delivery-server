import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  /*id:{
      type: mongoose.Schema.Types.ObjectId,
      required : true,
    },*/
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Shop", ShopSchema);
