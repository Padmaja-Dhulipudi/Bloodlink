import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="container text-center mt-5">

                <h1 className="display-3 fw-bold text-danger">
                    Donate Blood, Save Lives ❤️
                </h1>

                <p className="lead mt-3">
                    Connect blood donors and recipients quickly,
                    safely, and efficiently.
                </p>

                <div className="mt-4">

                    <Link
                        to="/find-donors"
                        className="btn btn-danger btn-lg me-3"
                    >
                        Find Donors
                    </Link>

                    <Link
                        to="/request-blood"
                        className="btn btn-outline-danger btn-lg"
                    >
                        Request Blood
                    </Link>

                </div>

            </div>

            <div className="container mt-5">

                <div className="row text-center">

                    <div className="col-md-4">

                        <div className="card shadow p-4">

                            <h3>🩸</h3>

                            <h4>Verified Donors</h4>

                            <p>
                                Search verified blood donors by
                                blood group and city.
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow p-4">

                            <h3>⚡</h3>

                            <h4>Instant Requests</h4>

                            <p>
                                Send blood requests in seconds
                                during emergencies.
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow p-4">

                            <h3>🔒</h3>

                            <h4>Secure Platform</h4>

                            <p>
                                JWT Authentication keeps user
                                accounts protected.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;