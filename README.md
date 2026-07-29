# 🩸 BloodLink

BloodLink is a full-stack MERN web application that connects blood donors with hospitals and patients in need. It provides secure authentication, donor management, and blood request features to make finding blood donors faster and easier.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Password Hashing with bcrypt

### Donor Management (In Progress)
- Create Donor Profile
- Update Profile
- Search Donors by Blood Group
- Search Donors by City
- Availability Status

### Blood Requests (Upcoming)
- Create Blood Request
- View Active Requests
- Accept Requests
- Request Status Tracking

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

---

## 📂 Project Structure

```
BloodLink
│
├── client
│   ├── src
│   └── public
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── .env
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/BloodLink.git
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

---

## 📌 Current Progress

- [x] Project Setup
- [x] MongoDB Atlas Connection
- [x] User Schema
- [x] Register API
- [x] Login API
- [x] JWT Authentication
- [x] Authentication Middleware
- [ ] Donor CRUD
- [ ] Blood Request API
- [ ] Search & Filters
- [ ] React Frontend
- [ ] Deployment

---

## 🎯 Future Improvements

- Role-Based Access Control
- Nearby Donor Search
- Email Notifications
- Emergency Request Alerts
- Admin Dashboard
- Responsive UI

---

## 👨‍💻 Author

**Padmaja Dhulipudi**

Computer Science Undergraduate | MERN Stack Developer
