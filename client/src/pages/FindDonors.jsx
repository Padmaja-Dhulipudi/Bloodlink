import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function FindDonors() {

    const [bloodGroup, setBloodGroup] = useState("");
    const [city, setCity] = useState("");
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchDonors = async () => {

        try {

            setLoading(true);

            const params = {};

            if (bloodGroup) {
                params.bloodGroup = bloodGroup;
            }

            if (city) {
                params.city = city;
            }

            const res = await API.get("/donor/search", {
                params
            });

            setDonors(res.data.donors);

            if (res.data.donors.length === 0) {
                toast.info("No donors found");
            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to search donors"
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div className="container mt-5 mb-5">

            <h2 className="text-center text-danger mb-4">
                Find Blood Donors
            </h2>

            {/* Search Section */}

            <div className="card shadow mb-5">

                <div className="card-body">

                    <div className="row g-3">

                        <div className="col-md-5">

                            <label className="form-label">
                                Blood Group
                            </label>

                            <select
                                className="form-select"
                                value={bloodGroup}
                                onChange={(e) =>
                                    setBloodGroup(e.target.value)
                                }
                            >

                                <option value="">
                                    Any Blood Group
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

                        <div className="col-md-5">

                            <label className="form-label">
                                City
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) =>
                                    setCity(e.target.value)
                                }
                            />

                        </div>

                        <div className="col-md-2 d-flex align-items-end">

                            <button
                                className="btn btn-danger w-100"
                                onClick={searchDonors}
                                disabled={loading}
                            >
                                {loading
                                    ? "Searching..."
                                    : "Search"}
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            {/* Donor Results */}

            <div className="row">

                {donors.map((donor) => (

                    <div
                        className="col-md-6 col-lg-4 mb-4"
                        key={donor._id}
                    >

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h5 className="card-title">
                                    {donor.name}
                                </h5>

                                <h3 className="text-danger">
                                    {donor.bloodGroup}
                                </h3>

                                <p>
                                    <strong>City:</strong>{" "}
                                    {donor.city}
                                </p>

                                <p>
                                    <strong>Phone:</strong>{" "}
                                    {donor.phone}
                                </p>

                                <span className="badge bg-success">
                                    Available
                                </span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default FindDonors;