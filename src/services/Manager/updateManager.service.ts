import { Manager } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IManagerPatchRequest } from "../../interfaces/manager";

const updateManagerService = async ({
  id,
  name,
  email,
  password,
}: IManagerPatchRequest): Promise<IManagerPatchRequest> => {
  const manager = await prisma.manager.findFirst({
    where: {
      id,
    },
  });

  if (!manager) {
    throw new AppError(404, "Manager not found.");
  }

  const updatedManager = await prisma.manager.update({
    where: {
      id,
    },
    data: {
      name: name ? name : manager.name,
      email: email ? email : manager.email,
      password: password ? password : manager.password,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isManager: true,
    },
  });

  return updatedManager;
};

export default updateManagerService;
