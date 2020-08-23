import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = Router();

routes.get("/", multer(multerConfig).single("file"), (req, res) => {
    console.log(req.file);
    res.json({ message: "Funcionando" });
});

export default routes;