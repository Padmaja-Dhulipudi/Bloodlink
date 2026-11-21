import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        bloodGroup: "",
        city: "",
        role: "donor",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "role" && value !== "donor"
                ? { bloodGroup: "" }
                : {}),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await API.post(
                "/auth/register",
                formData
            );

            toast.success("Registration Successful!");

            console.log(res.data);

            navigate("/login");

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Registration Failed"
            );

        }
    };

    return (
        <div
            className="container mt-5 mb-5"
            style={{ maxWidth: "600px" }}
        >

            <div className="card shadow p-4">

                <h2 className="text-center text-danger mb-4">
                    🩸 Create BloodLink Account
                </h2>

                <form onSubmit={handleSubmit}>

                    {/* Name */}

                    <label className="form-label">
                        Full Name
                    </label>

                    <input
                        className="form-control mb-3"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />


                    {/* Email */}

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        className="form-control mb-3"
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />


                    {/* Password */}

                    <label className="form-label">
                        Password
                    </label>

                    <input
                        className="form-control mb-3"
                        placeholder="Create a password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />


                    {/* Phone */}

                    <label className="form-label">
                        Phone Number
                    </label>

                    <input
                        className="form-control mb-3"
                        placeholder="10-digit phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                        required
                    />


                    {/* Role */}

                    <label className="form-label">
                        I want to register as
                    </label>

                    <select
                        className="form-control mb-3"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="donor">
                            🩸 Blood Donor
                        </option>
                        <option value="requester">
                            👤 Individual / Patient
                        </option>

                        <option value="hospital">
                            🏥 Hospital / Blood Requester
                        </option>
                    </select>

  
                                        {/* Blood Group - Donors Only */}

                    {formData.role === "donor" && (
                        <>
                            <label className="form-label">
                                Blood Group
                            </label>

                            <select
                                className="form-control mb-3"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Select Blood Group
                                </option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </>
                    )}


                    {/* City */}

                    <label className="form-label">
                        City
                    </label>

                    <input
                        className="form-control mb-4"
                        placeholder="Enter your city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />


                    <button
                        type="submit"
                        className="btn btn-danger w-100"
                    >
                        Create Account
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Register;