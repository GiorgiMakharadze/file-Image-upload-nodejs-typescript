import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  res.send("create product");
};

export const getAllProducts = async (req: Request, res: Response) => {
  res.send("list of products");
};
