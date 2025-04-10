import React from "react";
import "./Network.css";

const Network = () => {
  return (
    <div className="network-container">
      {/* Left Sidebar - Manage Network */}
      <div className="network-sidebar">
        <h4>Manage my network</h4>
        <ul>
          <li>Connections <span>366</span></li>
          <li>Contacts <span>149</span></li>
          <li>Following & followers <span>64</span></li>
          <li>Groups <span>4</span></li>
          <li>Events <span>1</span></li>
          <li>Pages <span>64</span></li>
          <li>Newsletters <span>11</span></li>
        </ul>
      </div>

      {/* Invitations & Suggestions */}
      <div className="network-content">
        <div className="network-header">
          <h4>Grow</h4>
          <h4>Catch up</h4>
        </div>

        <div className="invitations">
          <h5>Invitations (6)</h5>
          <div className="invitation">
            <img src="profile1.jpg" alt="User" />
            <div className="invitation-details">
              <p><b>Parikshit Sharma</b></p>
              <p>Attended GLOBAL NATURE CARE GROUP SANGATHAN INSTITUTION, Jabalpur</p>
            </div>
            <div className="invitation-buttons">
              <button className="ignore">Ignore</button>
              <button className="accept">Accept</button>
            </div>
          </div>
          <div className="invitation">
            <img src="profile2.jpg" alt="User" />
            <div className="invitation-details">
              <p><b>Ayush Pandey</b></p>
              <p>B.Tech CSE | Aspiring Software Engineer | Java | Python | Frontend</p>
            </div>
            <div className="invitation-buttons">
              <button className="ignore">Ignore</button>
              <button className="accept">Accept</button>
            </div>
          </div>
        </div>

        {/* Games & Job Recommendations */}
        <div className="network-extras">
          <h5>Stay in touch through daily games</h5>
          <div className="games">
            <button className="game-button">Zip #18</button>
            <button className="game-button">Queens #339</button>
            <button className="game-button">Tango #179</button>
          </div>

          <h5>Get hired faster</h5>
          <p>See jobs where you're most likely to hear back.</p>
        </div>
      </div>
    </div>
  );
};

export default Network;
