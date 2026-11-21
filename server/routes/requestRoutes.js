import express from "express";

import {
    createRequest,
    getAllRequests,
    getMyRequests,
    acceptRequest,
    completeRequest,
    deleteRequest
} from "../controllers/requestController.js";

import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

// Create blood request
router.post(
    "/",
    protect,
    allowRoles("requester", "hospital", "admin"),
    createRequest
);

// Get logged-in user's requests
router.get(
    "/my",
    protect,
    getMyRequests
);

// Get all blood requests
router.get(
    "/",
    protect,
    getAllRequests
);

// Donor accepts request
router.put(
    "/:id/accept",
    protect,
    allowRoles("donor", "admin"),
    acceptRequest
);

// Donor/Admin completes request
router.put(
    "/:id/complete",
    protect,
    allowRoles("donor", "admin"),
    completeRequest
);

// Request creator deletes request
router.delete(
    "/:id",
    protect,
    deleteRequest
);

export default router;