import { Router } from "express";
import { ProductControllers } from "../controllers/Products/product.controller";

const productCrontrollers = new ProductControllers();

const route = Router();

route.post("manager/:id", productCrontrollers.create);
route.get("", productCrontrollers.list);
route.get("/:id", productCrontrollers.listById);
route.delete("/:id", productCrontrollers.delete);
route.patch("/:id", productCrontrollers.update);

export default route;
