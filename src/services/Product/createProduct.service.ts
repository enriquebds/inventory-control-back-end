import { Product } from "@prisma/client";
import { randomUUID } from "crypto";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IProductRequest } from "../../interfaces/product";

const createProductService = async ({
  id,
  name,
  category,
  description,
  price,
}: IProductRequest): Promise<Product> => {
  const manager = await prisma.manager.findFirst({
    where: {
      id,
    },
  });

  if (!manager) {
    throw new AppError(404, "Manager not found");
  }

  const productAlreadyExists = await prisma.product.findFirst({
    where: {
      name,
    },
  });

  if (productAlreadyExists) {
    throw new AppError(400, "Product already exists");
  }

  const product = await prisma.product.create({
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
    data: {
      id: randomUUID(),
      name,
      category,
      description,
      price,
      managerId: manager?.id,
    },
  });

  return product;
};

export default createProductService;
