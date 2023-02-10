import { randomUUID } from "crypto";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IClientList, IClientRequest } from "../../interfaces/client";
import bcrypt from "bcrypt";
import { Client } from "@prisma/client";

const createClientService = async ({
  name,
  email,
  password,
}: IClientRequest): Promise<IClientList> => {
  const clientAlreadyExists = await prisma.client.findFirst({
    where: {
      email,
    },
  });

  if (clientAlreadyExists) {
    throw new AppError(400, "Email already being used");
  }

  const client = await prisma.client.create({
    data: {
      id: randomUUID(),
      email,
      name,
      password: await bcrypt.hash(password, 8),
    },
    select: {
      id: true,
      name: true,
      email: true,
      products: true,
    },
  });

  return client;
};

export default createClientService;
