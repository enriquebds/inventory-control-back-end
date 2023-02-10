import { Router } from "express";
import { LoginControllers } from "../controllers/Login/login.controller";

const loginController = new LoginControllers();

const route = Router();

route.post("", loginController.login);

export default route;
