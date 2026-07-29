import express from "express";
import {
    getProfile,
    updateProfile,
    searchDonors
} from "../controllers/donorController.js";
import  protect  from "../middleware/authMiddleware.js";

const router = express.Router();

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

router.get("/search", searchDonors);
// Update Logged-in User Profile
router.put("/profile", protect, updateProfile);

export default router;