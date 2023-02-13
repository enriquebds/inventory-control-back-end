import { Router } from "express";
import { ClientControllers } from "../controllers/Client/client.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import { verifyManager } from "../middlewares/verifyIsManager.middleware";

const clientControllers = new ClientControllers();
const route = Router();

route.post("", clientControllers.create);
route.post(
  "/product/:id/:idUser",
  tokenAuthMiddleware,
  clientControllers.addingProduct
);
route.get("", tokenAuthMiddleware, verifyManager, clientControllers.list);
route.get("/:id", clientControllers.listById);
route.delete("/:id", tokenAuthMiddleware, clientControllers.delete);
route.patch("/:id", tokenAuthMiddleware, clientControllers.patch);

export default route;
