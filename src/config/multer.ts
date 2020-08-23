import path from "path"
import multer, { FileFilterCallback } from "multer";
import { Request } from "express";
import crypto from "crypto";



const multerConfig = {
    dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(8, (err, hash) =>{
                if(err){
                    callback(err, "ErrorName");
                }

                const fileName = `${Date.now()}-${hash.toString("hex")}-${file.originalname}`

                callback(null, fileName);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024 //2 Megabytes
    },
    fileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];

        if(allowedMimes.includes(file.mimetype)){
            callback(null, true);
        }
        else{
            callback(new Error("Invalid file type."));
        }
    }
}       

export default multerConfig;