import Note from '../models/Note.js';

// Get all notes for the logged-in user
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({ user: req.userId }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get a single note by ID (only if it belongs to the user)
export async function getAllNotebyId(req, res) {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.userId });
    
    if (!note) {
      return res.status(404).json({ message: "Note Not Found" });
    }
    
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getAllNotebyId controller", error);
    res.status(500).json({ message: error.message });
  }
}

// Create a new note for the logged-in user
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ 
      title, 
      content,
      user: req.userId  // Link note to logged-in user
    });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update a note (only if it belongs to the user)
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },  // Only update if user owns the note
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note Not Found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Delete a note (only if it belongs to the user)
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findOneAndDelete({ 
      _id: req.params.id, 
      user: req.userId  // Only delete if user owns the note
    });
    
    if (!deletedNote) {
      return res.status(404).json({ message: "Note Not Found" });
    }
    
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}