import React from 'react';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import VideoGrid from './Video/VideoGrid';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="pt-16">
          <VideoGrid />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;