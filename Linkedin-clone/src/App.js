import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trending from "./components/Trending";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();

  // Show Sidebar and Trending only on Home Page ("/")
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar />
      <div className="container-fluid main-layout">
        {/* Show Sidebar only on Homepage */}
        {isHomePage && <Sidebar />}

        {/* Routing for different pages */}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/network" element={<Network />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Show Trending only on Homepage */}
        {isHomePage && <Trending />}
      </div>
    </>
  );
}

export default App;
