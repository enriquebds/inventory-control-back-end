import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IClientList } from "../../interfaces/client";

const listClientService = async (): Promise<IClientList[]> => {
  const clients = await prisma.client.findMany({
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
