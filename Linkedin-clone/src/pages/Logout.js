import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or token (if implemented)
    localStorage.removeItem("userToken");

    // Redirect to Home
    navigate("/");
  };

  return (
    <div className="page-container">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
