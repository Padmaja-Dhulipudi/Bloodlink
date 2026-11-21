import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Profile() {

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        bloodGroup: "",
        available: true,
        role: ""
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.get("/donor/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setProfile(res.data.user);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load profile"
            );

        } finally {

            setLoading(false);

        }
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setProfile({
            ...profile,
            [name]: value
        });

    };

    const handleAvailability = (e) => {

        setProfile({
            ...profile,
            available: e.target.value === "true"
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setSaving(true);

            const token = localStorage.getItem("token");

            const res = await API.put(
                "/donor/profile",
                {
                    name: profile.name,
                    phone: profile.phone,
                    city: profile.city,
                    bloodGroup: profile.bloodGroup,
                    available: profile.available
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setProfile(res.data.user);

            toast.success("Profile updated successfully!");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update profile"
            );

        } finally {

            setSaving(false);

        }
    };

    if (loading) {

        return (
            <div className="container mt-5 text-center">
                <h4>Loading profile...</h4>
            </div>
        );

    }

    return (

        <div className="container mt-5 mb-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow">

                        <div className="card-header bg-danger text-white text-center">

                            <h3 className="mb-0">
                                👤 My Profile
                            </h3>

                        </div>

                        <div className="card-body p-4">

                            {/* Role */}

                            <div className="text-center mb-4">

                                <span className="badge bg-dark fs-6 px-3 py-2">

                                    {profile.role === "donor"
                                        ? "🩸 Blood Donor"
                                        : profile.role === "hospital"
                                            ? "🏥 Hospital"
                                            : "👑 Admin"
                                    }

                                </span>

                            </div>


                            <form onSubmit={handleSubmit}>

                                {/* Name */}

                                <label className="form-label">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    required
                                />


                                {/* Email */}

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    value={profile.email}
                                    disabled
                                />

                                <small className="text-muted d-block mb-3">
                                    Email cannot be changed.
                                </small>


                                {/* Phone */}

                                <label className="form-label">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                    maxLength="10"
                                    required
                                />


                                {/* City */}

                                <label className="form-label">
                                    City
                                </label>

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="city"
                                    value={profile.city}
                                    onChange={handleChange}
                                    required
                                />


                                {/* Blood Group */}

                                <label className="form-label">
                                    Blood Group
                                </label>

                                <select
                                    className="form-control mb-3"
                                    name="bloodGroup"
                                    value={profile.bloodGroup}
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


                                {/* Availability */}

                                <label className="form-label">
                                    Donor Availability
                                </label>

                                <select
                                    className="form-control mb-4"
                                    value={profile.available}
                                    onChange={handleAvailability}
                                    disabled={profile.role !== "donor"}
                                >

                                    <option value="true">
                                        🟢 Available to Donate
                                    </option>

                                    <option value="false">
                                        🔴 Currently Unavailable
                                    </option>

                                </select>


                                {/* Save */}

                                <button
                                    type="submit"
                                    className="btn btn-danger w-100"
                                    disabled={saving}
                                >

                                    {saving
                                        ? "Saving..."
                                        : "Save Changes"
                                    }

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Profile;