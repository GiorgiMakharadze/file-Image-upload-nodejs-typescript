import express, { Request, Response } from "express";
import "dotenv/config";
import "express-async-errors";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import morgan from "morgan";
import { connectDB } from "./api/db/connect";
import { notFound } from "./api/middleware/not-found";
import { errorHandlerMiddleware } from "./api/middleware/error-handler";
import productRouter from "./api/routes/productRoutes";

const port = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.static("./public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//routes
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>File Upload Starter</h1>");
});

app.use("/api/v1/products", productRouter);

// error handler
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
