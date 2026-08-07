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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/register", formData);

            toast.success("Registration Successful!");

            console.log(res.data);

            navigate("/login");
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Registration Failed"
            );
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <div className="card shadow p-4">

                <h2 className="text-center text-danger mb-4">
                    Register
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <select
                        className="form-control mb-3"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                    >
                        <option value="">Select Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>

                    <input
                        className="form-control mb-3"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />

                    <button className="btn btn-danger w-100">
                        Register
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Register;