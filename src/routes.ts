import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = Router();

routes.post("/", multer(multerConfig).single("file"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.json({ message: "Funcionando" });
});

export default routes;