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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("express-async-errors");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const morgan_1 = __importDefault(require("morgan"));
const connect_1 = require("./api/db/connect");
const not_found_1 = require("./api/middleware/not-found");
const error_handler_1 = require("./api/middleware/error-handler");
const productRoutes_1 = __importDefault(require("./api/routes/productRoutes"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.static("./public"));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)());
//routes
app.get("/", (req, res) => {
    res.send("<h1>File Upload Starter</h1>");
});
app.use("/api/v1/products", productRoutes_1.default);
// error handler
app.use(not_found_1.notFound);
app.use(error_handler_1.errorHandlerMiddleware);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
