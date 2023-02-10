import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IClientList, IClientPatchRequest } from "../../interfaces/client";

const updateClientService = async ({
  id,
  name,
  email,
  password,
}: IClientPatchRequest): Promise<IClientList> => {
  const client = await prisma.client.findFirst({
    where: {
      id,
    },
  });

  if (!client) {
    throw new AppError(404, "Client not found.");
  }

  const updatedClient = await prisma.client.update({
    where: {
      id,
    },
    data: {
      name: name ? name : client.name,
      email: email ? email : client.email,
      password: password ? password : client.password,
    },
    select: {
      id: true,
      name: true,
      email: true,
      products: true,
    },
  });

  return updatedClient;
};

export default updateClientService;
