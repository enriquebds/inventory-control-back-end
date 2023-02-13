import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IProductPatchRequest } from "../../interfaces/product";

const updateProductService = async ({
  id,
  name,
  category,
  description,
  price,
}: IProductPatchRequest): Promise<IProductPatchRequest> => {
  const product = await prisma.product.findFirst({
    where: {
      id,
    },
  });

  if (!product) {
    throw new AppError(404, "Product not found.");
  }

  const updatedProduct = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: name ? name : product.name,
      category: category ? category : product.category,
      description: description ? description : product.description,
      price: price ? price : product.price,
    },
    select: {
      id: true,
      name: true,
      category: true,
      description: true,
      price: true,
    },
  });

  return updatedProduct;
};

export default updateProductService;
