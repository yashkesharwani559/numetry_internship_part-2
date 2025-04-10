import React from "react";
import "./Jobs.css"; // Custom CSS for Jobs page

const Jobs = () => {
  return (
    <div className="jobs-container">
      {/* Left Sidebar - User Profile */}
      <div className="profile-sidebar">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-pic"
          />
          <h3>Manu Jha</h3>
          <p>Machine learning // Full stack web developer</p>
          <p>Indore, Madhya Pradesh</p>
          <hr />
          <ul>
            <li>🔧 Preferences</li>
            <li>📁 My Jobs</li>
            <li>🎤 Interview Prep</li>
            <li>📢 Post a Free Job</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Job Listings */}
      <div className="job-listings">
        <h2>Job Picks for You</h2>
        <div className="job-card">
          <h4>React JS Developer</h4>
          <p>GAMMASTACK - Indore, India (On-site)</p>
          <span>5 months ago</span>
        </div>

        <div className="job-card">
          <h4>React Developer</h4>
          <p>CoderWing - Indore, India (On-site)</p>
          <span>Viewed</span>
        </div>

        <div className="job-card">
          <h4>Junior Web Developer (Fresher)</h4>
          <p>SR NEXT - Indore, India (On-site)</p>
          <span>Promoted - Easy Apply</span>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
