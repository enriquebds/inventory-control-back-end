import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const deleteManagerService = async (id: string): Promise<true> => {
  const manager = await prisma.manager.findFirst({
    where: {
      id,
    },
  });

  if (!manager) {
    throw new AppError(404, "Manager not found.");
  }

  await prisma.manager.delete({
    where: {
      id: manager.id,
    },
  });

  return true;
};

export default deleteManagerService;
