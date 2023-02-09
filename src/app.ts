import express from "express";
import { handleErrors } from "./errors/handleError";
import "express-async-errors";
import managerRoutes from "../src/routes/manager.routes";

let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/manager", managerRoutes);
app.use(handleErrors);

export default app;
