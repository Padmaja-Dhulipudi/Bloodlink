import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                >
                    🩸 BloodLink
                </Link>

                <div className="d-flex align-items-center gap-2">

                    {token ? (
                        <>
                            <Link
                                className="btn btn-outline-light"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>

                            <Link
                                className="btn btn-outline-light"
                                to="/find-donors"
                            >
                                Find Donors
                            </Link>

                            <Link
                                className="btn btn-outline-light"
                                to="/request-blood"
                            >
                                Request Blood
                            </Link>

                            <Link
                                className="btn btn-outline-light"
                                to="/my-requests"
                            >
                                My Requests
                            </Link>

                            <Link
                                className="btn btn-outline-light"
                                to="/profile"
                            >
                                Profile
                            </Link>

                            <button
                                className="btn btn-dark"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                className="btn btn-light"
                                to="/login"
                            >
                                Login
                            </Link>

                            <Link
                                className="btn btn-outline-light"
                                to="/register"
                            >
                                Register
                            </Link>
                        </>
                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;