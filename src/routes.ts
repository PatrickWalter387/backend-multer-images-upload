import { Router } from "express";
import { appendFile } from "fs";

const routes = Router();

routes.get("/", (req, res) => res.json({ message: "Funcionando" }));

export default routes;