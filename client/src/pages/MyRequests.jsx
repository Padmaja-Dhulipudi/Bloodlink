import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function MyRequests() {

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMyRequests();
    }, []);

    const fetchMyRequests = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.get("/request/my", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setRequests(res.data.requests);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load requests"
            );

        } finally {

            setLoading(false);

        }
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h4>Loading requests...</h4>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <h2 className="text-center text-danger mb-4">
                🩸 My Blood Requests
            </h2>

            {requests.length === 0 ? (

                <div className="alert alert-info text-center">
                    No blood requests found.
                </div>

            ) : (

                <div className="row">

                    {requests.map((request) => (

                        <div
                            className="col-md-6 mb-4"
                            key={request._id}
                        >

                            <div className="card shadow">

                                <div className="card-body">

                                    <h5 className="card-title">
                                        {request.patientName}
                                    </h5>

                                    <p>
                                        <strong>Blood Group:</strong>{" "}
                                        {request.bloodGroup}
                                    </p>

                                    <p>
                                        <strong>Units:</strong>{" "}
                                        {request.units}
                                    </p>

                                    <p>
                                        <strong>Hospital:</strong>{" "}
                                        {request.hospital}
                                    </p>

                                    <p>
                                        <strong>City:</strong>{" "}
                                        {request.city}
                                    </p>

                                    <p>
                                        <strong>Contact:</strong>{" "}
                                        {request.contact}
                                    </p>

                                    <span className="badge bg-warning text-dark">
                                        {request.status}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default MyRequests;