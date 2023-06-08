import { Router } from "express";
import { GetResponse } from "../../controllers/chat_controller.js";

const router = Router();
router.route("/").post(GetResponse);

export default router;
