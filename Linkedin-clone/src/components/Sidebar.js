import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="sidebar__profile">
        <div className="sidebar__background"></div>
        <img src="https://i.pravatar.cc/100" className="sidebar__avatar" alt="Profile" />
        <h3>Manu Jha</h3>
        <p>Machine Learning // Full Stack Web Developer</p>
        <span className="sidebar__location">Indore, Madhya Pradesh</span>
        <p className="sidebar__education">📘 Ryan International School, Jabalpur</p>
      </div>

      {/* Stats Section */}
      <div className="sidebar__stats">
        <p>Profile viewers: <strong>114</strong></p>
        <p>Post impressions: <strong>92</strong></p>
      </div>

      {/* Options Section */}
      <div className="sidebar__options">
        <p className="sidebar__premium">⭐ Try Premium for ₹0</p>
        <ul>
          <li>🔖 Saved items</li>
          <li>👥 Groups</li>
          <li>📄 Newsletters</li>
          <li>📅 Events</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
