import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { CreatePage } from './pages/CreatePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx'

import { toast, Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div data-theme="futuristic">
      <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}
