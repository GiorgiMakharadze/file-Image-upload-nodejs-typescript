"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const uploadsController_1 = require("../controllers/uploadsController");
const router = (0, express_1.Router)();
router.route("/").post(productController_1.createProduct).get(productController_1.getAllProducts);
router.route("/uploads").post(uploadsController_1.uploadProductImage);
exports.default = router;
