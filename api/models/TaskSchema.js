import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", TaskSchema);
export default Tasks;
