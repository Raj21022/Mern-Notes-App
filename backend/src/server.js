import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

connectDB();

//middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true
    })
  );
}

app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter);

// API Routes - These must come BEFORE static file serving
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Catch-all route - serve index.html for any non-API routes
  app.get("*", (req, res) => {
    // Make sure we're not serving index.html for API routes
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    }
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});