import { Manager } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IManagerList } from "../../interfaces/manager";

const listManagerById = async (id: string): Promise<IManagerList> => {
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
