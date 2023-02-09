import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const listClientById = async (id: string): Promise<Client> => {
  const client = await prisma.client.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      products: true,
    },
  });

  if (!client) {
    throw new AppError(404, "Client not found");
  }

  return client;
};

export default listClientById;
