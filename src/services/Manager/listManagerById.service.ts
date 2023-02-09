import { Manager } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const listManagerById = async (id: string): Promise<Manager> => {
  const manager = await prisma.manager.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isManager: true,
    },
  });

  if (!manager) {
    throw new AppError(404, "Manager not found");
  }

  return manager;
};

export default listManagerById;
