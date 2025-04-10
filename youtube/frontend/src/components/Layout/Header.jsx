import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-10">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full px-4 py-2 rounded-l-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-100 dark:bg-gray-800 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              🔍
            </button>
          </div>
        </form>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            🎥
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            🔔
          </button>
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            🚪
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 