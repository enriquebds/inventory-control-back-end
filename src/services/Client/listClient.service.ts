import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const listClientService = async (): Promise<Client[]> => {
  const clients = prisma.client.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      products: true,
    },
  });

  return clients;
};

export default listClientService;
