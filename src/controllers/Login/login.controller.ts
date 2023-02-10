import { Request, Response } from "express";
import loginService from "../../services/Login/login.service";

export class LoginControllers {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await loginService({ email, password });

    return res.json(token);
  }
}
