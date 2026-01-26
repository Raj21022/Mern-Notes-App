import { PlusIcon, LogOut, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-primary font-mono tracking-tight hover:opacity-80 transition-opacity">
            ThinkBoard
          </Link>
          
          <div className="flex items-center gap-4">
            {/* User Info */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-base-200 rounded-lg">
              <User className="w-5 h-5 text-primary" />
              <span className="font-medium">{user?.username}</span>
            </div>

            {/* Create Note Button */}
            <Link to="/create" className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span className="hidden sm:inline">New Note</span>
            </Link>

            {/* Logout Button */}
            <button 
              onClick={logout} 
              className="btn btn-ghost btn-sm sm:btn-md hover:btn-error"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div> 
    </header>
  );
};