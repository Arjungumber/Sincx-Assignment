import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    assignedTo: String,
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending",
    },
    dueDate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export default mongoose.model("Task", taskSchema);
