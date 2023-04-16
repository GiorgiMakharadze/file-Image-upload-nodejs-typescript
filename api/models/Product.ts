import mongoose, { Schema } from "mongoose";
import { IProductSchema } from "../../types/productModelTypes";

const ProductSchema = new Schema<IProductSchema>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IProductSchema>("Product", ProductSchema);
