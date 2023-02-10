import { Router } from "express";
import { ProductControllers } from "../controllers/Products/product.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import { verifyManager } from "../middlewares/verifyIsManager.middleware";

const productCrontrollers = new ProductControllers();

const route = Router();

route.post(
  "/manager/:id",
  tokenAuthMiddleware,
  verifyManager,
  productCrontrollers.create
);
route.get("", productCrontrollers.list);
route.get("/:id", productCrontrollers.listById);
route.delete(
  "/:id",
  tokenAuthMiddleware,
  verifyManager,
  productCrontrollers.delete
);
route.patch(
  "/:id",
  tokenAuthMiddleware,
  verifyManager,
  productCrontrollers.update
);

export default route;
