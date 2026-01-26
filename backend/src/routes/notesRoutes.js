import express from 'express';
import { getAllNotes, getAllNotebyId, createNote, updateNote, deleteNote } from '../Controllers/notesControllers.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all note routes with authentication
router.use(authenticateToken);

router.get('/', getAllNotes);
router.get('/:id', getAllNotebyId);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;