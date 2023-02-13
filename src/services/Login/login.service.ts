import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { ILoginRequest } from "../../interfaces/Login";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

const loginService = async ({ email, password }: ILoginRequest) => {
  const manager = await prisma.manager.findFirst({
    where: {
      email,
    },
  });

  let user;

  const client = await prisma.client.findFirst({
    where: {
      email,
    },
  });

  if (manager) {
    user = manager;
  } else if (client) {
    user = client;
  } else {
    throw new AppError(403, "Wrong email/password");
  }

  const passwordCompare = await compare(password, user?.password!);

  if (!passwordCompare) {
    throw new AppError(403, "Wrong email/password");
  }

  const token = jwt.sign(
    {
      email: client?.email,
      isManager: manager?.isManager,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return { token: token, userId: user.id };
};

export default loginService;
