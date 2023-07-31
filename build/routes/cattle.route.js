"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cattle_controller_1 = __importDefault(require("../controllers/cattle.controller"));
var multer_config_1 = __importDefault(require("../middlewares/multer.config"));
var router = express_1.default.Router();
var cattleController = new cattle_controller_1.default();
router.post("/", multer_config_1.default.single("image"), cattleController.createCattle); // Use upload middleware before the controller method
router.get("/", cattleController.getAllCattle);
router.get("/:id", cattleController.getCattleById);
router.put("/:id", cattleController.updateCattleById);
router.delete("/:id", cattleController.deleteCattleById);
exports.default = router;
//# sourceMappingURL=cattle.route.js.map