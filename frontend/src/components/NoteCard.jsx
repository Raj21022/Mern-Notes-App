import React from 'react'
import { Link } from 'react-router-dom'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils.js';
import api from '../lib/axios.js';
import toast from 'react-hot-toast';

export const NoteCard = ({ note,setNotes }) => {
  const handleDelete = async (e,_id) => {
    e.preventDefault();
    // Add delete functionality here
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await api.delete(`/notes/${_id}`);
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== _id));
        toast.success("Note deleted successfully");
      } catch (error) {
        console.error("Error deleting note:", error);
        toast.error("Failed to delete the note");
      }
    } 
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4 text-base-content/70" />

            <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id )}>
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
