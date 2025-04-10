import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaHome, FaUsers, FaBriefcase, FaComments, FaBell, FaCaretDown } from "react-icons/fa";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid">
        {/* Left Section (Logo + Search) */}
        <Link className="navbar-brand" to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Logo" className="navbar__logo" />
        </Link>
        
        <div className="navbar__search">
          <FaSearch className="search__icon" />
          <input type="text" className="form-control" placeholder="Search" />
        </div>

        {/* Navbar Toggler for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Section (Navigation Links) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><FaHome /> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/network" className="nav-link"><FaUsers /> My Network</Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="nav-link"><FaBriefcase /> Jobs</Link>
            </li>
            <li className="nav-item">
              <Link to="/messaging" className="nav-link"><FaComments /> Messaging</Link>
            </li>
            <li className="nav-item">
              <Link to="/notifications" className="nav-link"><FaBell /> Notifications</Link>
            </li>
          </ul>

          {/* Right Section (Profile + Dropdown) */}
          <div className="navbar__profile">
            <img src="https://i.pravatar.cc/100" alt="Profile" className="profile-pic" onClick={() => setDropdownOpen(!dropdownOpen)} />
            <FaCaretDown onClick={() => setDropdownOpen(!dropdownOpen)} />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown-menu show">
                <Link to="/profile" className="dropdown-item">View Profile</Link>
                <Link to="/settings" className="dropdown-item">Settings</Link>
                <Link to="/logout" className="dropdown-item">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
