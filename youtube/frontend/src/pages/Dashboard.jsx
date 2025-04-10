import React from 'react';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import VideoGrid from '../components/Video/VideoGrid';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Sidebar />
      <main className="flex-1">
        <VideoGrid />
      </main>
    </div>
  );
};

export default Dashboard; 