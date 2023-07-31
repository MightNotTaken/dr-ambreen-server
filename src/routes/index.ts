import express from "express";
import cattleRoutes from "./cattle.route";

const router = express.Router();

router.use("/cattle", cattleRoutes);

export default router;
