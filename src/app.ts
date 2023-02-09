import express from "express";
import { handleErrors } from "./errors/handleError";
import "express-async-errors";

let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(handleErrors);

export default app;
