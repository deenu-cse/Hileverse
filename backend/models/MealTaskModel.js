const mongoose = require("mongoose");

const MealTaskSchema = new mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
        required: true,
    },
    mealType: {
        type: String, // Morning, Evening, Night
        required: true,
    },
    taskDetails: {
        type: String, // Task description
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending",
    },
    assignedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("MealTask", MealTaskSchema);
