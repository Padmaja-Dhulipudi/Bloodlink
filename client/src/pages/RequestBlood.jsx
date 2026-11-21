import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../services/api";

function RequestBlood() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        patientName: "",
        bloodGroup: "",
        units: 1,
        hospital: "",
        city: "",
        contact: "",
    });

    const [loading, setLoading] = useState(false);

    // Get logged-in user's role
    const user = JSON.parse(localStorage.getItem("user"));

    // Only hospitals and admins can create requests
    if (user?.role !== "hospital" && user?.role !== "admin") {

        return (
            <div className="container mt-5">

                <div className="card shadow text-center p-5">

                    <h2 className="text-danger mb-3">
                        🩸 Request Blood
                    </h2>

                    <div className="alert alert-warning">
                        <h5>Access Restricted</h5>

                        <p className="mb-0">
                            Only hospitals can create blood requests.
                        </p>
                    </div>

                    <button
                        className="btn btn-danger mt-3"
                        onClick={() => navigate("/dashboard")}
                    >
                        Go to Dashboard
                    </button>

                </div>

            </div>
        );
    }

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await API.post("/request", {
                ...formData,
                units: Number(formData.units),
            });

            toast.success(
                "Blood request created successfully!"
            );

            setFormData({
                patientName: "",
                bloodGroup: "",
                units: 1,
                hospital: "",
                city: "",
                contact: "",
            });

            navigate("/dashboard");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create blood request"
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div
            className="container mt-5 mb-5"
            style={{ maxWidth: "600px" }}
        >

            <div className="card shadow p-4">

                <h2 className="text-center text-danger mb-4">
                    🩸 Request Blood
                </h2>

                <form onSubmit={handleSubmit}>

                    {/* Patient Name */}

                    <div className="mb-3">

                        <label className="form-label">
                            Patient Name
                        </label>

                        <input
                            type="text"
                            name="patientName"
                            className="form-control"
                            placeholder="Enter patient name"
                            value={formData.patientName}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Blood Group */}

                    <div className="mb-3">

                        <label className="form-label">
                            Blood Group
                        </label>

                        <select
                            name="bloodGroup"
                            className="form-select"
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

                    </div>


                    {/* Units */}

                    <div className="mb-3">

                        <label className="form-label">
                            Units Required
                        </label>

                        <input
                            type="number"
                            name="units"
                            className="form-control"
                            min="1"
                            value={formData.units}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Hospital */}

                    <div className="mb-3">

                        <label className="form-label">
                            Hospital
                        </label>

                        <input
                            type="text"
                            name="hospital"
                            className="form-control"
                            placeholder="Enter hospital name"
                            value={formData.hospital}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* City */}

                    <div className="mb-3">

                        <label className="form-label">
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="Enter city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Contact */}

                    <div className="mb-4">

                        <label className="form-label">
                            Contact Number
                        </label>

                        <input
                            type="tel"
                            name="contact"
                            className="form-control"
                            placeholder="Enter 10-digit contact number"
                            value={formData.contact}
                            onChange={handleChange}
                            maxLength="10"
                            required
                        />

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="btn btn-danger w-100"
                        disabled={loading}
                    >

                        {loading
                            ? "Submitting..."
                            : "Request Blood"
                        }

                    </button>

                </form>

            </div>

        </div>
    );
}

export default RequestBlood;