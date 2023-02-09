import { Manager } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";

const listManagerService = (): Promise<Manager[]> => {
  const managers = prisma.manager.findMany({
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
