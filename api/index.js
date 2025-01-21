import express from "express";
import cors from "cors";
import userRoutes from "./routes/user_routes.js";
import taskRoutes from "./routes/task_route.js";
import { connectDB } from "./db.js";

// DB connection and express init
connectDB();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
