import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">

            <div className="container">

                <Link className="navbar-brand fw-bold fs-3" to="/">
                    🩸 BloodLink
                </Link>

                <div>

                    <Link
                        className="btn btn-light me-2"
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

                </div>

            </div>

        </nav>
    );
}

export default Navbar;