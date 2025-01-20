import express from "express";
import Tasks from "../models/TaskSchema.js";

const router = express.Router();

router.get("", (req, res) => {
  return res.status(200).json({ code: 200, message: "Tasks route Success" });
});

export default router;
