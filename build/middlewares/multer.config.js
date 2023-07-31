"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        // Use the original filename without any modifications
        cb(null, file.originalname);
    },
});
var fileFilter = function (req, file, cb) {
    // Check if the file is an image (you can add more checks as needed).
    if (file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/gif") {
        cb(null, true); // Allow the upload.
    }
    else {
        cb(new Error("Invalid file type. Only images are allowed."));
    }
};
var upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
});
exports.default = upload;
//# sourceMappingURL=multer.config.js.map