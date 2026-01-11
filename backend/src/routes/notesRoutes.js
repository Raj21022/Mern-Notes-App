import e from 'express';
import express from 'express';
import { createNote, getAllNotes,getAllNotebyId, updateNote,deleteNote } from '../Controllers/notesControllers.js';
const router = express.Router();

router.get('/', getAllNotes);
router.get('/:id', getAllNotebyId);
router.post('/', createNote);
router.put('/:id', updateNote); 
router.delete('/:id', deleteNote);

export default router;