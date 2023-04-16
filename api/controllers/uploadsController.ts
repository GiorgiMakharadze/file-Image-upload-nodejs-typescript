import { Request, Response } from "express";
import path from "path";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/bad-request";
import { IUploadFile } from "../../types/uploadFileTypes";

export const uploadProductImage = async (req: Request, res: Response) => {
  if (!req.files) {
    throw new BadRequestError("No file uploaded");
  }

  const productImage = req.files?.image as IUploadFile;
  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please upload Image");
  }

  const maxSize = parseInt(process.env.IMAGE_MAX_SIZE!);
  if (productImage.size > maxSize) {
    throw new BadRequestError(`Please upload Image smaller ${maxSize} KB`);
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
