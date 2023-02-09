import { IManageRequest } from "../../interfaces/manager";
import { prisma } from "../../../prisma/client/client";
import { Manager } from "@prisma/client";
import { AppError } from "../../errors/AppError";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

const createManagerService = async ({
  name,
  email,
  password,
}: IManageRequest): Promise<Manager> => {
  const managerExists = await prisma.manager.findFirst({
    where: {
      email,
    },
  });

  if (!name || !email || !password) {
    throw new AppError(
      400,
      "Make sure you have passed the following data: email, name and password"
    );
  }

  if (managerExists) {
    throw new AppError(400, "Email already being used");
  }

  const manager = await prisma.manager.create({
    data: {
      id: randomUUID(),
      name,
      email,
      password: await bcrypt.hash(password, 8),
    },
    select: {
      id: true,
      name: true,
      email: true,
      isManager: true,
    },
  });

  return manager;
};

export default createManagerService;
