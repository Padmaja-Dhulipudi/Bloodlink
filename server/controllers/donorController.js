import User from "../models/User.js";

// Get Logged-in User Profile
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Update Logged-in User Profile
export const updateProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.name = req.body.name || user.name;
        user.phone = req.body.phone || user.phone;
        user.city = req.body.city || user.city;
        user.bloodGroup = req.body.bloodGroup || user.bloodGroup;
        user.available =
            req.body.available !== undefined
                ? req.body.available
                : user.available;

        const updatedUser = await user.save();

        res.status(200).json({
            success: true,
            user: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                phone: updatedUser.phone,
                city: updatedUser.city,
                bloodGroup: updatedUser.bloodGroup,
                available: updatedUser.available,
                role: updatedUser.role
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Search Donors
export const searchDonors = async (req, res) => {
    try {

        const { bloodGroup, city } = req.query;

        let query = {
            role: "donor",
            available: true
        };

        if (bloodGroup) {
            query.bloodGroup = bloodGroup;
        }

        if (city) {
            query.city = { $regex: city, $options: "i" };
        }

        const donors = await User.find(query).select("-password");

        res.status(200).json({
            success: true,
            count: donors.length,
            donors
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};