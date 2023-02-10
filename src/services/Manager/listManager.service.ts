import { Manager } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { IManagerList } from "../../interfaces/manager";

const listManagerService = async (): Promise<IManagerList[]> => {
  const managers = await prisma.manager.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      isManager: true,
    },
  });

  return managers;
};

export default listManagerService;
