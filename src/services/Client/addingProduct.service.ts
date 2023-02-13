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
    where: {
      id: idUser,
    },
  });

  const cart = await prisma.cart.upsert({
    where: {
      clientId_productId: {
        clientId: client!.id,
        productId: product!.id,
      },
    },
    update: {
      products: {
        connect: { id: product?.id },
      },
    },
    create: {
      client: { connect: { id: client?.id } },
      products: { connect: { id: product?.id } },
    },
    select: {
      client: {
        select: {
          id: true,
          email: true,
          name: true,
          cart: {
            select: {
              products: {
                select: {
                  id: true,
                  name: true,
                  category: true,
                  price: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return cart;
};

export default addingProductService;
