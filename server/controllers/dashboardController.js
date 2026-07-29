import User from "../models/User.js";
import BloodRequest from "../models/BloodRequest.js";

export const getDashboardStats = async (req, res) => {
    try {
        const [
            totalDonors,
            availableDonors,
            totalRequests,
            pendingRequests,
            acceptedRequests,
            completedRequests,
        ] = await Promise.all([
            User.countDocuments({ role: "donor" }),
            User.countDocuments({ role: "donor", available: true }),
            BloodRequest.countDocuments(),
            BloodRequest.countDocuments({ status: "Pending" }),
            BloodRequest.countDocuments({ status: "Accepted" }),
            BloodRequest.countDocuments({ status: "Completed" }),
        ]);

        res.status(200).json({
            success: true,
            dashboard: {
                totalDonors,
                availableDonors,
                totalRequests,
                pendingRequests,
                acceptedRequests,
                completedRequests,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};