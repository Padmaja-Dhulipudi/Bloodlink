import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Dashboard() {

    const [stats, setStats] = useState({
        totalDonors: 0,
        availableDonors: 0,
        totalRequests: 0,
        pendingRequests: 0,
        acceptedRequests: 0,
        completedRequests: 0,
    });

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.get("/dashboard", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setStats(res.data.dashboard);

        } catch (error) {

            toast.error("Failed to load dashboard");

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="text-center text-danger mb-4">
                BloodLink Dashboard
            </h2>

            <div className="row">

                <DashboardCard title="Total Donors" value={stats.totalDonors} color="primary" />
                <DashboardCard title="Available Donors" value={stats.availableDonors} color="success" />
                <DashboardCard title="Total Requests" value={stats.totalRequests} color="warning" />
                <DashboardCard title="Pending Requests" value={stats.pendingRequests} color="secondary" />
                <DashboardCard title="Accepted Requests" value={stats.acceptedRequests} color="info" />
                <DashboardCard title="Completed Requests" value={stats.completedRequests} color="danger" />

            </div>

        </div>

    );

}

function DashboardCard({ title, value, color }) {

    return (

        <div className="col-md-4 mb-4">

            <div className={`card border-${color} shadow`}>

                <div className="card-body text-center">

                    <h5>{title}</h5>

                    <h1 className={`text-${color}`}>
                        {value}
                    </h1>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;