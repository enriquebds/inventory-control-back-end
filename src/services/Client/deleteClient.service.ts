import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const deleteClientService = async (id: string): Promise<true> => {
  const client = await prisma.client.findFirst({
    where: {
      id,
    },
  });

  if (!client) {
    throw new AppError(404, "Manager not found.");
  }

  await prisma.client.delete({
    where: {
      id: client.id,
    },
  });

  return true;
};

export default deleteClientService;
