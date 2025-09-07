#  E-Commerce Backend (MERN Assignment)

This is the **backend API** for the e-commerce web application built with **Node.js, Express, MongoDB, and JWT authentication**.

---

## Features
- User authentication (Signup, Login) with JWT
- Role-based access (`user`, `admin`)
- Product CRUD APIs with filters (category, minPrice, maxPrice)
- Cart APIs (add, remove, fetch cart items)
- Cart persists after logout/login (linked to user account)

---

## Folder Structure
backend/
│── config/ # DB & JWT config
│── controllers/ # Business logic
│── middleware/ # Auth middleware
│── models/ # Mongoose models
│── routes/ # API routes
│── server.js # App entry point


---

## 🛠️ Tech Stack
- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **bcrypt.js** for password hashing

---

##  API Endpoints

### Auth
- `POST /api/auth/signup` → Register user
- `POST /api/auth/login` → Login user, returns JWT

### Products
- `GET /api/products` → Fetch all products (filters supported)
- `POST /api/products` → Create product (**Admin only**)
- `PUT /api/products/:id` → Update product (**Admin only**)
- `DELETE /api/products/:id` → Delete product (**Admin only**)

### Cart
- `GET /api/cart` → Get user cart
- `POST /api/cart/add` → Add item to cart
- `DELETE /api/cart/remove/:id` → Remove item from cart

---
Backend Live Api(Render)---https://ecommerce-backend-6lvv.onrender.com

## 🧑‍💼 Admin Test Account

To test admin functionality (CRUD operations on products), use the following credentials:

- **Email:** admin@gmail.com  
- **Password:** 123456  

##  Run Locally
```bash
git clone https://github.com/Chandu5342/Ecommerce-Backend.git
cd backend
npm install
npm start
