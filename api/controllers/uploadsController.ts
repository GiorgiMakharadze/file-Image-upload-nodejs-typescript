import { Request, Response } from "express";
import path from "path";
import { StatusCodes } from "http-status-codes";
import Product from "../models/Product";
import { BadRequestError } from "../errors/bad-request";
import { IUploadFile } from "../../types/uploadFileTypes";

export const uploadProductImage = async (req: Request, res: Response) => {
  const productImage = req.files?.image as IUploadFile;
  if (!productImage) {
    throw new BadRequestError("No product image uploaded");
  }

  const imagePath = path.join(
    __dirname,
    "../../../public/uploads/" + `${productImage?.name}`
  );
  await productImage?.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage?.name}` } });
};
