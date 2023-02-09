import { Router } from "express";
import { ManagerControllers } from "../controllers/Manager/manager.controller";

const managerControllers = new ManagerControllers();

const route = Router();

route.post("", managerControllers.create);
route.get("", managerControllers.list);
route.get("/:id", managerControllers.listById);
route.delete("/:id", managerControllers.delete);
route.patch("/:id", managerControllers.update);

export default route;
