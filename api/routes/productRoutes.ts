import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController";
import { uploadProductImage } from "../controllers/uploadsController";

const router = Router();

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);

export default router;
