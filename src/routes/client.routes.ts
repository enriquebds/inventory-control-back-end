import { Router } from "express";
import { ClientControllers } from "../controllers/Client/client.controller";

const clientControllers = new ClientControllers();
const route = Router();

route.post("", clientControllers.create);
route.post("/product/:id/:idUser", clientControllers.addingProduct);
route.get("", clientControllers.list);
route.get("/:id", clientControllers.listById);
route.delete("/:id", clientControllers.delete);
route.patch("/:id", clientControllers.patch);

export default route;
