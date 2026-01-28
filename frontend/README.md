# ThinkBoard 

A full‑stack **MERN Notes Application** with authentication, authorization, and user‑specific data. ThinkBoard allows users to securely create, read, update, and delete their personal notes.

This project was built while learning backend development and demonstrates real‑world concepts like JWT authentication, protected routes, middleware, and database design.

---

# Features

* User Signup & Login (JWT Authentication)
* Secure password hashing with bcrypt
* Protected backend routes using middleware
* User‑specific notes (each user sees only their own notes)
* Create, Read, Update, Delete (CRUD) notes
* Rate limiting for API security
* Centralized error handling
* Responsive React frontend

---

## Tech Stack

# Frontend

* React (Vite)
* React Router DOM
* Axios
* Tailwind CSS + DaisyUI

# Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* Express Rate Limit

---

# Authentication Flow

1. User signs up / logs in
2. Backend validates credentials
3. JWT token is generated (7 days expiry)
4. Token is stored in `localStorage`
5. Axios interceptor attaches token to every request
6. Protected routes verify token via middleware
7. Invalid or expired token → automatic logout

## ▶️ Running Locally

### Backend

```
cd backend
npm install
npm run dev
```

### Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`
Backend runs on: `http://localhost:5001`

---

## 📡 API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

---

# What I Learned

* Designing REST APIs
* JWT‑based authentication & authorization
* Password hashing and security best practices
* Middleware usage in Express
* Handling token expiry and logout flow
* Connecting frontend and backend securely
* Structuring a scalable MERN project

---

# Deployment

* Backend: Render
* Frontend: Vercel
* Database: MongoDB Atlas



---

Built as part of backend learning and internship preparation.

---
