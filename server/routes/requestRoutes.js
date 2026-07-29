import express from "express";
import {
    createRequest,
    getAllRequests,
    acceptRequest,
    completeRequest,
    deleteRequest
} from "../controllers/requestController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createRequest);
router.get("/", getAllRequests);
router.put("/:id/accept", protect, acceptRequest);
router.put("/:id/complete", protect, completeRequest);
router.delete("/:id", protect, deleteRequest);
export default router;