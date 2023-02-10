import { Request, Response } from "express";
import createProductService from "../../services/Product/createProduct.service";
import deleteProductService from "../../services/Product/deleteProduct.service";
import listProductService from "../../services/Product/listProduct.service";
import listProductByIdService from "../../services/Product/listProductById.service";
import updateProductService from "../../services/Product/updateProduct.service";

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

  async listById(req: Request, res: Response) {
    const { id } = req.params;

    const product = await listProductByIdService(id);

    return res.json(product);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteProductService(id);

    return res.json({
      message: "Product deleted",
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, category, description } = req.body;

    const updatedProduct = await updateProductService({
      id,
      name,
      category,
      description,
    });

    return res.json(updatedProduct);
  }
}
