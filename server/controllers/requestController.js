import BloodRequest from "../models/BloodRequest.js";

export const createRequest = async (req, res) => {
    try {
        const {
            patientName,
            bloodGroup,
            units,
            hospital,
            city,
            contact
        } = req.body;

        const request = await BloodRequest.create({
            patientName,
            bloodGroup,
            units,
            hospital,
            city,
            contact,
            requester: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Blood request created successfully",
            request
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllRequests = async (req, res) => {

    try {

        const requests = await BloodRequest.find()
            .populate("requester", "name phone city")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: requests.length,
            requests
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const acceptRequest = async (req, res) => {

    try {

        const request = await BloodRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Request not found"
            });
        }

        request.status = "Accepted";

        await request.save();

        res.status(200).json({
            success: true,
            message: "Blood request accepted",
            request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const completeRequest = async (req, res) => {

    try {

        const request = await BloodRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Request not found"
            });
        }

        request.status = "Completed";

        await request.save();

        res.status(200).json({
            success: true,
            message: "Blood request completed",
            request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const deleteRequest = async (req, res) => {
    try {

        const request = await BloodRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Request not found"
            });
        }

        // Only creator can delete
        if (request.requester.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "Not authorized"
            });
        }

        await request.deleteOne();

        res.status(200).json({
            success: true,
            message: "Blood request deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};