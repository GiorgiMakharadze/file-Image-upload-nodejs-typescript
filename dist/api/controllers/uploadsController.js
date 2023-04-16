"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProductImage = void 0;
const path_1 = __importDefault(require("path"));
const http_status_codes_1 = require("http-status-codes");
const bad_request_1 = require("../errors/bad-request");
const uploadProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!req.files) {
        throw new bad_request_1.BadRequestError("No file uploaded");
    }
    const productImage = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
    if (!productImage.mimetype.startsWith("image")) {
        throw new bad_request_1.BadRequestError("Please upload Image");
    }
    const maxSize = parseInt(process.env.IMAGE_MAX_SIZE);
    if (productImage.size > maxSize) {
        throw new bad_request_1.BadRequestError(`Please upload Image smaller ${maxSize} KB`);
    }
    const imagePath = path_1.default.join(__dirname, "../../../public/uploads/" + `${productImage === null || productImage === void 0 ? void 0 : productImage.name}`);
    yield (productImage === null || productImage === void 0 ? void 0 : productImage.mv(imagePath));
    return res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ image: { src: `/uploads/${productImage === null || productImage === void 0 ? void 0 : productImage.name}` } });
});
exports.uploadProductImage = uploadProductImage;
