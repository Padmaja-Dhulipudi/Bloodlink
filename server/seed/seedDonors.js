import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import User from "../models/User.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const hashedPassword = await bcrypt.hash("password123", 10);

const donors = [
    {
        name: "Rahul",
        email: "rahul@gmail.com",
        password: hashedPassword,
        phone: "9876543201",
        bloodGroup: "O+",
        city: "Kakinada",
        role: "donor",
        available: true
    },
    {
        name: "Priya",
        email: "priya@gmail.com",
        password: hashedPassword,
        phone: "9876543202",
        bloodGroup: "A+",
        city: "Rajahmundry",
        role: "donor",
        available: true
    },
    {
        name: "Sai",
        email: "sai@gmail.com",
        password: hashedPassword,
        phone: "9876543203",
        bloodGroup: "B+",
        city: "Visakhapatnam",
        role: "donor",
        available: false
    },
    {
        name: "Anjali",
        email: "anjali@gmail.com",
        password: hashedPassword,
        phone: "9876543204",
        bloodGroup: "AB+",
        city: "Vijayawada",
        role: "donor",
        available: true
    },
    {
        name: "Kiran",
        email: "kiran@gmail.com",
        password: hashedPassword,
        phone: "9876543205",
        bloodGroup: "O-",
        city: "Guntur",
        role: "donor",
        available: true
    }
];
try {

    await User.deleteMany({
        email: {
            $in: donors.map(d => d.email)
        }
    });

    await User.insertMany(donors);

    console.log("Donors Added Successfully!");

    process.exit();

} catch (error) {

    console.log(error);

    process.exit(1);

}