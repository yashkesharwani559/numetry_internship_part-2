import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ setFilter }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 onClick={() => navigate('/')} className="cursor-pointer text-xl">MyTube</h1>
      <div className="flex gap-4">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('music')}>Music</button>
        <button onClick={() => setFilter('coding')}>Coding</button>
        <button onClick={() => navigate('/history')}>History</button>
        <button onClick={() => navigate('/playlist')}>My Playlist</button>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}