import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FindDonors from "./pages/FindDonors";
import RequestBlood from "./pages/RequestBlood";
import Profile from "./pages/Profile";
import MyRequests from "./pages/MyRequests";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route
                    path="/find-donors"
                    element={<FindDonors />}
                />

                <Route
                    path="/request-blood"
                    element={
                        <ProtectedRoute>
                            <RequestBlood />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/my-requests"
                    element={
                        <ProtectedRoute>
                            <MyRequests />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />

            </Routes>

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={3000}
            />

        </BrowserRouter>
    );
}

export default App;