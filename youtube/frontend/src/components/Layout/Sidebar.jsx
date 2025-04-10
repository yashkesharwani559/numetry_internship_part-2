import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 1, name: 'Home', icon: '🏠' },
    { id: 2, name: 'Shorts', icon: '⚡' },
    { id: 3, name: 'Subscriptions', icon: '📺' },
    { id: 4, name: 'Library', icon: '📚' },
    { id: 5, name: 'History', icon: '⏱️' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎥</span>
            <span className="text-xl font-bold">YouTube</span>
          </Link>
        </div>
        
        <nav className="mt-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/${category.name.toLowerCase()}`}
              className="flex items-center space-x-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-6 px-4">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Categories
          </h3>
          <div className="mt-2 space-y-2">
            {['Music', 'Gaming', 'News', 'Sports', 'Education'].map((category) => (
              <button
                key={category}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar; 