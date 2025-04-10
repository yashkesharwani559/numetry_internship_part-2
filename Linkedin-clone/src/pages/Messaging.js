import React, { useState } from "react";
import "./Messaging.css";

const Messaging = () => {
  const [messages, setMessages] = useState([
    { id: 1, name: "Dolly S", message: "Hi Manu, I need career guidance...", time: "1:43 PM" },
    { id: 2, name: "Sunderjeet Singh", message: "Exciting news to share", time: "8:51 AM" },
    { id: 3, name: "Jean Philippe A.", message: "Bangla Speakers Needed...", time: "March 27" },
    { id: 4, name: "Er. AKHTAR", message: "Thank you", time: "March 25" },
    { id: 5, name: "Nikita Nagpal", message: "Hey, Thanks for Connecting", time: "March 25" },
  ]);

  const [activeChat, setActiveChat] = useState(messages[0]);

  return (
    <div className="messaging-container">
      {/* Left Sidebar - Message List */}
      <div className="message-list">
        <h3>Messaging</h3>
        <input type="text" placeholder="Search messages" className="search-bar" />
        {messages.map((chat) => (
          <div key={chat.id} className={`message-card ${activeChat.id === chat.id ? "active" : ""}`}
            onClick={() => setActiveChat(chat)}>
            <h4>{chat.name}</h4>
            <p>{chat.message}</p>
            <span>{chat.time}</span>
          </div>
        ))}
      </div>

      {/* Right Side - Chat Window */}
      <div className="chat-box">
        <h3>{activeChat.name}</h3>
        <div className="chat-messages">
          <p className="received">{activeChat.message}</p>
        </div>
        <input type="text" className="message-input" placeholder="Write a message..." />
      </div>
    </div>
  );
};

export default Messaging;
