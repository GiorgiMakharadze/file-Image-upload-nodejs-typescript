import express, { Request, Response } from "express";
import "dotenv/config";
import "express-async-errors";
import morgan from "morgan";
import { connectDB } from "./api/db/connect";
import { notFound } from "./api/middleware/not-found";
import { errorHandlerMiddleware } from "./api/middleware/error-handler";

const port = process.env.PORT || 3000;
const app = express();

// error handler & middleware
app.use(notFound);
app.use(errorHandlerMiddleware);
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("<h1>File Upload Starter</h1>");
});

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