"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var router = express_1.default.Router();
var userController = new user_controller_1.default();
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.get("/find", userController.getUser);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);
exports.default = router;
//# sourceMappingURL=user.route.js.map