import express from "express";
import { handleErrors } from "./errors/handleError";
import "express-async-errors";
import managerRoutes from "../src/routes/manager.routes";
import clientRoutes from "../src/routes/client.routes";
import productRoutes from "../src/routes/product.routes";
import loginRoute from "../src/routes/login.routes";

let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/login", loginRoute);
app.use("/product", productRoutes);
app.use("/client", clientRoutes);
app.use("/manager", managerRoutes);
app.use(handleErrors);

export default app;
