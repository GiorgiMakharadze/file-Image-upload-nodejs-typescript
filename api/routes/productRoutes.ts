import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController";
import { uploadProductImageCloudinary } from "../controllers/uploadsController";
//import { uploadProductImageLocal } from "../controllers/uploadsController";
const router = Router();

router.route("/").post(createProduct).get(getAllProducts);
//if you want to upload images on your loacl server!
// router.route("/uploads").post(uploadProductImageLocal);
router.route("/uploads").post(uploadProductImageCloudinary);

export default router;
