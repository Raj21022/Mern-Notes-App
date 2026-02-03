# 📝 MERN Notes App

A simple full-stack Notes application built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates secure REST APIs, middleware, CORS, rate limiting, and deployment to Render.

---

## Demo
https://mern-notes-app-pdjg.onrender.com/login

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features
- Create, edit, and delete notes
- Fetch notes from MongoDB via a REST API
- Middleware for authentication, logging, and error handling
- CORS configured for frontend-backend communication
- Rate limiting to prevent abuse
- Ready for cloud deployment (Render)

---

## Tech Stack
- Frontend: React.js, HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Dev tools: Git, VS Code  
- Hosting: Render (or your choice)

---

## Screenshots

> Note: place the screenshot image files in the repository under `/screenshots/` (suggested filenames below). If you want, I can add and commit them for you.

1) Login page  
![Login page](./screenshots/1-login.png)

2) Empty notes / dashboard (no notes yet)  
![No notes yet](./screenshots/2-empty-notes.png)

3) Create note form  
![Create new note](./screenshots/3-create-note.png)

4) Notes list (example note)  
![Notes list](./screenshots/4-notes-list.png)

Suggested filenames to upload to the repo:
- screenshots/1-login.png
- screenshots/2-empty-notes.png
- screenshots/3-create-note.png
- screenshots/4-notes-list.png

If you prefer, you can use different names — just update the image paths above accordingly.

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Raj21022/Mern-Notes-App.git
```

2. Backend:
```bash
cd backend
npm install
# create .env from .env.example
npm run dev    # development with nodemon
# or npm start for production
```

3. Frontend:
```bash
cd frontend
npm install
npm run dev
```

---

## Configuration
Create a `.env` file in `backend/` with values like:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```
If deploying to Render, set these as environment variables in the Render dashboard.

---

## Usage
- Frontend: http://localhost:3000  
- Backend API: http://localhost:5000 (default)

Example: create a note with curl
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My note","content":"This is a note"}'
```

---

## API Endpoints (examples)
- GET  /api/notes        — get all notes
- GET  /api/notes/:id    — get a single note
- POST /api/notes        — create a note
- PUT  /api/notes/:id    — update a note
- DELETE /api/notes/:id  — delete a note

If your app has auth routes add:
- POST /api/auth/register
- POST /api/auth/login

---

## Development
- Run backend and frontend in separate terminals during development.
- Use nodemon for auto-restarts: `npm run dev` in backend.
- Consider adding tests (Jest/React Testing Library) for stability.

---

## Deployment
Suggested flow: GitHub → Render  
- Configure backend and frontend services on Render (or host frontend as static on Netlify/Vercel and backend on Render).
- Set environment variables in the hosting dashboard.
- For full-stack single-deploy setups, build the frontend and serve it from the backend (optional).

---

## Contributing
Contributions are welcome! Please open an issue or a pull request. Add a CONTRIBUTING.md if you want contribution guidelines.

---

## License
Add a license file (e.g., MIT) if you want to open-source the project.

Example:
```
MIT © Raj Gogawale
```

---

## Contact
Raj Gogawale  
- GitHub: https://github.com/Raj21022  
- LinkedIn: https://www.linkedin.com/in/raj-g-b72951276  
- Email: rajgogawale44@gmail.com

If you find this project useful, please star the repository ⭐