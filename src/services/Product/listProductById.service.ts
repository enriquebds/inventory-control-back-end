import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IProductRequest } from "../../interfaces/product";

const listProductByIdService = async (id: string): Promise<IProductRequest> => {
  const product = await prisma.product.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      category: true,
      description: true,
      price: true,
      manager: {
        select: {
          id: true,
          name: true,
          email: true,
          isManager: true,
        },
      },
    },
  });

  if (!product) {
    throw new AppError(404, "Product not found");
  }

  return product;
};

export default listProductByIdService;
