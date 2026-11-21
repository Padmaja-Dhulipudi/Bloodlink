# 🩸 BloodLink

### Connecting blood donors, patients, and hospitals through technology.

BloodLink is a full-stack MERN web application that simplifies blood donation coordination by connecting blood donors with individuals and hospitals in need of blood. The platform provides donor discovery, secure authentication, profile management, and blood request tracking through a centralized interface.

---

## ✨ Features

- **User Authentication** — Secure registration and login using JWT authentication and password hashing.
- **Role-Based Access** — Separate account types for blood donors, individual patients, and hospitals.
- **Donor Discovery** — Find donors using blood group and city filters.
- **Donor Profiles** — Manage personal information, blood group, location, and availability.
- **Blood Requests** — Create and manage requests with required blood group, units, patient details, and contact information.
- **Request Management** — View personal requests and manage request statuses.
- **Dashboard** — Access an overview of donor and blood request statistics.
- **Protected Routes** — Restrict access to authenticated users and authorized roles.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, React Router |
| Styling | CSS, Bootstrap |
| API Communication | Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcryptjs |
| Notifications | React Toastify |

---

## 🏗️ Architecture

```text
                 ┌─────────────────────┐
                 │    React Frontend   │
                 │                     │
                 │  Pages & Components│
                 └──────────┬──────────┘
                            │
                       Axios API
                            │
                 ┌──────────▼──────────┐
                 │   Express Server    │
                 │                     │
                 │ Routes & Middleware │
                 │     Controllers     │
                 └──────────┬──────────┘
                            │
                       Mongoose
                            │
                 ┌──────────▼──────────┐
                 │    MongoDB Atlas    │
                 │                     │
                 │    Application     │
                 │       Data          │
                 └─────────────────────┘
```

---

## 📁 Project Structure

```text
BloodLink/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── utils/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Padmaja-Dhulipudi/Bloodlink.git
cd Bloodlink
```

### 2. Configure the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

### 3. Configure the frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL provided by Vite, usually:

`http://localhost:5173`

---

## 🔐 Security

- Passwords are hashed before storage.
- JWT tokens are used for authentication.
- Protected API routes require valid authentication.
- Role-based middleware controls access to restricted operations.
- Environment variables are used for sensitive configuration.

---

## 🚀 Future Enhancements

- Location-based donor discovery
- Emergency blood request notifications
- Email and SMS alerts
- Hospital verification
- Administrative dashboard
- Cloud deployment

---

## 👩‍💻 Author

**Padmaja Dhulipudi**

Computer Science Undergraduate | MERN Stack Developer

---

<p align="center">
  Made with ❤️ to make blood donation coordination easier.
</p>
