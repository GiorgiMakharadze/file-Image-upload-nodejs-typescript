import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Product from "../models/Product";

export const uploadProductImage = async (req: Request, res: Response) => {
  res.send("upload product image");
};
