import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import protect from "./middleware/authMiddleware.js";


dotenv.config();

connectDB();

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/profile", protect, (req, res) => {
    res.json({
        success: true,
        message: "Protected Route Accessed",
        user: req.user
    });
});

// Test Route
app.get("/", (req, res) => {
    res.send("BloodLink Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});