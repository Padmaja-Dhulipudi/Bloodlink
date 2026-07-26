import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    let token;

    // Check Authorization Header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            req.user = decoded;

            next();

        } catch (error) {

            return res.status(401).json({
                success: false,
                message: "Not Authorized"
            });

        }
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No Token"
        });
    }
};

export default protect;