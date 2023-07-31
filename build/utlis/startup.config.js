"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialSetup = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var initialSetup = function () {
    try {
        var uploadDirectoryPath = path_1.default.join(__dirname, '../../uploads');
        if (!fs_1.default.existsSync(uploadDirectoryPath)) {
            fs_1.default.mkdirSync(uploadDirectoryPath);
        }
    }
    catch (error) {
        console.error(error);
    }
};
exports.initialSetup = initialSetup;
//# sourceMappingURL=startup.config.js.map