import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IClientList } from "../../interfaces/client";
import { Product } from "@prisma/client";

const addingProductService = async (id: string, idUser: string) => {
  const product = await prisma.product.findFirst({
    where: {
      id,
    },
  });

  const client = await prisma.client.findFirst({
    include: {
      products: true,
    },
    where: {
      id: idUser,
    },
  });
  const updateClient = await prisma.client.update({
    where: {
      id: client?.id,
    },
    data: {
      products: {
        connect: {
          id: product?.id,
        },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      products: true,
    },
  });

  return updateClient;
};

export default addingProductService;
