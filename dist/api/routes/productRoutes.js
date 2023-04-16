"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const uploadsController_1 = require("../controllers/uploadsController");
//import { uploadProductImageLocal } from "../controllers/uploadsController";
const router = (0, express_1.Router)();
router.route("/").post(productController_1.createProduct).get(productController_1.getAllProducts);
//if you want to upload images on your loacl server!
// router.route("/uploads").post(uploadProductImageLocal);
router.route("/uploads").post(uploadsController_1.uploadProductImageCloudinary);
exports.default = router;
