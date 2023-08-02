import multer from "multer";
import { Request } from "express";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb) {
    const folderName = path.join("uploads", req.body.RFID);
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, {
        recursive: true
      });
    }
    cb(null, folderName);
  },
  filename: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, file?.originalname);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (!file) {
    return cb(null, true);
  }
  req.body.mimeType = file.mimetype;
  // Check if the file is an image (you can add more checks as needed).
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true); // Allow the upload.
  } else {
    cb(new Error("Invalid file type. Only images are allowed."));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
