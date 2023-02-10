import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const deleteProductService = async (id: string): Promise<true> => {
  const product = await prisma.product.findFirst({
    where: {
      id,
    },
  });

  if (!product) {
    throw new AppError(404, "Product not found.");
  }

  await prisma.product.delete({
    where: {
      id: product.id,
    },
  });

  return true;
};

export default deleteProductService;
