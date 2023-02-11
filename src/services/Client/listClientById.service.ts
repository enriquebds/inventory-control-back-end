import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IClientList } from "../../interfaces/client";

const listClientById = async (id: string): Promise<IClientList> => {
  const client = await prisma.client.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
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
  });

  if (!client) {
    throw new AppError(404, "Client not found");
  }

  return client;
};

export default listClientById;
