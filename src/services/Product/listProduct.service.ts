import { Product } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { IProductList } from "../../interfaces/product";

const listProductService = async (): Promise<Partial<IProductList[]>> => {
  const product = await prisma.product.findMany({
    include: {
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

  return product;
};

export default listProductService;
