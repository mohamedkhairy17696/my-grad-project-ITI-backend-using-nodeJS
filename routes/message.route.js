import express from "express";
const router = express.Router();
import { fn } from "../controllers/message.controller.js";

router.get("/test", fn);

export default router;
