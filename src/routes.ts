import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = Router();

routes.post("/", multer(multerConfig).array("files", 3), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.json({ message: "Funcionando" });
});

export default routes;