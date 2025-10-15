import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        description: String,
        assignedTo: String,
        status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending",
        },
        dueDate: Date,
    },
    { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
