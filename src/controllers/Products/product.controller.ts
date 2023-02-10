import { Request, Response } from "express";
import createProductService from "../../services/Product/createProduct.service";
import listProductService from "../../services/Product/listProduct.service";

export class ProductControllers {
  async create(req: Request, res: Response) {
    const { id } = req.params;
    const { name, category, description } = req.body;

    const product = await createProductService({
      id,
      name,
      category,
      description,
    });

    return res.status(201).json(product);
  }

  async list(req: Request, res: Response) {
    const products = await listProductService();

    return res.json(products);
  }
}
