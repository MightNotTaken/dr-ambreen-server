import express from "express";
import CattleController from "../controllers/cattle.controller";
import upload from "../middlewares/multer.config";

const router = express.Router();
const cattleController = new CattleController();

router.post("/", upload.single("image"), cattleController.createCattle); // Use upload middleware before the controller method

router.get("/", cattleController.getAllCattle);
router.get("/:id", cattleController.getCattleById);
router.put("/:id", cattleController.updateCattleById);
router.delete("/:id", cattleController.deleteCattleById);

export default router;
