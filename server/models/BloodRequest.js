import mongoose from "mongoose";

const bloodRequestSchema = new mongoose.Schema(
    {
        patientName: {
            type: String,
            required: [true, "Patient name is required"],
            trim: true,
        },

        bloodGroup: {
            type: String,
            required: [true, "Blood group is required"],
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        },

        units: {
            type: Number,
            required: [true, "Number of units is required"],
            min: [1, "Units must be at least 1"],
        },

        hospital: {
            type: String,
            required: [true, "Hospital name is required"],
            trim: true,
        },

        city: {
            type: String,
            required: [true, "City is required"],
            trim: true,
        },

        contact: {
            type: String,
            required: [true, "Contact number is required"],
            minlength: [10, "Contact number must be 10 digits"],
            maxlength: [10, "Contact number must be 10 digits"],
            match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
        },

        requester: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Accepted", "Completed"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("BloodRequest", bloodRequestSchema);