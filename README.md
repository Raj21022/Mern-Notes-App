📝 MERN Stack Notes App

A full-stack MERN (MongoDB, Express, React, Node.js) based Notes Application designed to help users create, manage, and organize notes efficiently with secure APIs and modern backend architecture.

This project also demonstrates important backend concepts such as:

1)REST APIs

2)Middleware

3)CORS

4)Rate Limiting

5)Authentication flow

6)Deployment process

🚀 Tech Stack
Frontend -React.js,HTML, CSS, JavaScript

Backend-Node.js, Express.js

Database -MongoDB (NoSQL)

Tools & Platforms-Git & GitHub ,VS Code,Render (Deployment)

📌 How a Full Stack MERN App Works
Client (React App)
      |
      |  HTTP Requests (GET, POST, PUT, DELETE)
      ↓
Server (Node + Express)
      |
      ↓
Database (MongoDB)

👉 The client sends requests to the server
👉 The server processes logic and interacts with the database
👉 The response is sent back to the client

🔗 What is an API?

API (Application Programming Interface) allows different applications to communicate with each other.

💡 Think of it like a waiter in a restaurant:

You (Client) place an order (Request)

Waiter (API) takes it to the kitchen (Server)

Kitchen prepares food (Database/Logic)

Waiter brings it back (Response)

📂 Types of APIs Used
REST API

Uses HTTP methods:

Method	Purpose
GET	      Fetch data
POST	      Create data
PUT	      Update data
DELETE	Delete data

📊 SQL vs NoSQL
-SQL (Relational Databases)

-Structured data

-Uses tables

-Uses SQL language

-Best for complex queries

-NoSQL (MongoDB)

-Flexible JSON-like documents

-Schema-less

-Best for scalable apps & real-time data

⚙️ Middleware

-Middleware is a function that runs between request and response.

Example uses:

-Authentication checks

-Logging

-Error handling

-Rate limiting
 
Client → Middleware → Server → Response
🔐 CORS (Cross-Origin Resource Sharing)

CORS allows your frontend (different domain/port) to safely access backend APIs.

Example:

Frontend:

http://localhost:3000

Backend:

http://localhost:5000

Without CORS → Browser blocks requests
With CORS → Communication allowed

🚦 Rate Limiting

Used to prevent abuse by limiting requests per user.

Example:

Only 100 requests every 15 minutes

If exceeded → Server returns:

429 Too Many Requests

Benefits:

Prevents server overload

Improves security

📡 HTTP Status Codes
– Success

200 OK
201 Created

– Client Errors

400 Bad Request
401 Unauthorized
404 Not Found

– Server Errors

500 Internal Server Error

☁️ Deployment Flow
GitHub → Render → Live Server

Code pushed to GitHub

Render pulls repository

Backend deployed with live URL

✨ Features of Notes App

✅ Create Notes
✅ Edit Notes
✅ Delete Notes
✅ Fetch Notes from Database
✅ REST API Backend
✅ Secure Server Architecture
✅ Cloud Deployment

📦 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/Raj21022/Mern-Notes-App
2️⃣ Backend Setup
cd backend
npm install
npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm start

🧠 What I Learned

-Full MERN stack workflow

-REST API design

-Express middleware handling

-CORS configuration

-Rate limiting for security

-MongoDB NoSQL concepts

-Deployment using Render

📬 Contact

Raj Gogawale

GitHub: https://github.com/Raj21022

LinkedIn: https://www.linkedin.com/in/raj-g-b72951276

Email: rajgogawale44@gmail.com

⭐ If you like this project, don’t forget to star the repository!
