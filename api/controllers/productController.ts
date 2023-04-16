import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};
