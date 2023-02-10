import { Router } from "express";
import { ManagerControllers } from "../controllers/Manager/manager.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import { verifyManager } from "../middlewares/verifyIsManager.middleware";

const managerControllers = new ManagerControllers();

const route = Router();

route.post("", managerControllers.create);
route.get("", managerControllers.list);
route.get("/:id", managerControllers.listById);
route.delete(
  "/:id",
  tokenAuthMiddleware,
  verifyManager,
  managerControllers.delete
);
route.patch(
  "/:id",
  tokenAuthMiddleware,
  verifyManager,
  managerControllers.update
);

export default route;
