import express from "express";
import Users from "../models/UserSchema.js";

const router = express.Router();

router.get("", (req, res) => {
  return res.status(200).json({ code: 200, message: "Users route Success" });
});

export default router;
