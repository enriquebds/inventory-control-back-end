import { Router } from "express";
import { ProductControllers } from "../controllers/Products/product.controller";

const productCrontrollers = new ProductControllers();

const route = Router();

route.post("manager/:id", productCrontrollers.create);
route.get("", productCrontrollers.list);

export default route;
