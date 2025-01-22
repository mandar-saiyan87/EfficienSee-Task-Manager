import express from "express";
import Users from "../models/UserSchema.js";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// JWT KEY
config();
const { JWT_SECRET } = process.env;

const router = express.Router();

// User test route
router.get("", (req, res) => {
  return res.status(200).json({ code: 200, message: "Users route Success" });
});

// POST: New User Create
router.post("/register", async (req, res) => {
  try {
    const userexist = await Users.findOne({ email: req.body.email });

    if (userexist) {
      return res
        .status(409)
        .json({ message: "User already exist with same email" });
    }
    // Creating password hash with salt 10
    const hashpasswd = await bcrypt.hash(req.body.password, 10);

    const newUser = await Users.create({
      emailId: req.body.email,
      username: req.body.username,
      isGoogleUser: false,
      password: hashpasswd,
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.emailId },
      JWT_SECRET,
      { expiresIn: "1 day" }
    );

    return res.status(201).json({
      message: "New user created successfully",
      user: {
        id: newUser._id,
        email: newUser.emailId,
        username: newUser.username,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
