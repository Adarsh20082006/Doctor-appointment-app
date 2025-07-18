# 🏥 Doctor Appointment Booking System - MERN Stack

A full-featured **Doctor Appointment Booking System** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This project includes **3-level authentication** (Admin, Doctor, Patient), **online payment integration**, and **role-specific dashboards** for managing appointments, profiles, and earnings.

## 🚀 Features

### 👨‍⚕️ For Patients:
- Register/Login as Patient
- Browse available doctors
- Book appointments with doctors
- Make secure online payments
- View and manage booked appointments

### 🩺 For Doctors:
- Register/Login as Doctor
- View upcoming appointments
- Update profile details
- Track earnings from appointments

### 🔐 For Admin:
- Login to Admin Dashboard
- Manage all doctors and patients
- View and manage all appointments
- Approve or reject doctor profiles

## 🔧 Tech Stack (MERN)

| Technology | Description |
|------------|-------------|
| MongoDB    | NoSQL database for storing user, doctor, and appointment data |
| Express.js | Backend framework for building APIs |
| React.js   | Frontend framework for dynamic UI |
| Node.js    | JavaScript runtime environment for the server |

## 💳 Online Payment Integration
- Secure online payments using **Razorpay** (or any other gateway)
- Patients can pay appointment fees online
- Payment confirmation updates appointment status automatically

## 🗂️ Folder Structure

project-root/  
├── backend/  
│ ├── controllers/  
│ ├── models/  
│ ├── routes/  
│ ├── config/  
│ └── server.js  
├── frontend/  
│ ├── src/  
│ │ ├── components/  
│ │ ├── pages/  
│ │ ├── utils/  
│ │ └── App.js  
│ └── package.json  
├── README.md  
└── .env  


## 🛡️ Authentication & Authorization
- JWT-based token authentication
- Role-based access control for Admin, Doctor, and Patient
- Protected routes for dashboard pages

## 🖥️ Screenshots

<img src="https://github.com/user-attachments/assets/ee8be8c9-4b18-41e4-a9ed-84320d466bd6" width="400" height="400" />
<img src="https://github.com/user-attachments/assets/9609eb5b-4bde-4215-b696-e0fb414ab429" width="400" height="400" />
<img src="https://github.com/user-attachments/assets/05f1a62a-75c4-44cb-b3f4-45f175b0a6bc" width="400" height="400" />


## 📦 Installation Guide

### 1. Clone the Repository
```
git clone https://github.com/yourusername/doctor-appointment-system.git
cd doctor-appointment-system
```

### 2. Setup Backend
```
cd backend
npm install
```

Create a .env file in the backend directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

Start the server:
```
npm run dev
```

### 3. Setup Frontend
```
cd frontend
npm install
npm start
```
