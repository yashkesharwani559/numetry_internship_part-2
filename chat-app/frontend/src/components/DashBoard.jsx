import { useState } from "react";
import { motion } from "framer-motion";

const users = [
  {
    id: 1,
    name: "Alice",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    messages: [
      { from: "me", text: "Hey Alice!" },
      { from: "Alice", text: "Hi! How are you?" },
      { from: "me", text: "Doing great, you?" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    messages: [
      { from: "me", text: "Yo Bob!" },
      { from: "Bob", text: "Hey bro!" },
      { from: "me", text: "All good?" },
    ],
  },
  {
    id: 3,
    name: "Emma",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    messages: [
      { from: "me", text: "Hey Emma, long time!" },
      { from: "Emma", text: "Yeah! What’s up?" },
    ],
  },
  // Add more mock users as needed
];

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white border-r p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-green-600">Chats</h2>
        {users.map((user) => (
          <motion.div
            key={user.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedUser(user)}
            className="flex items-center gap-3 mb-4 p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all shadow-sm"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
            />
            <span className="text-lg font-semibold">{user.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Right Chat Window */}
      <div className="w-3/4 relative bg-gradient-to-br from-green-100 via-white to-green-200 p-6">
        {!selectedUser ? (
          <div className="flex h-full justify-center items-center text-gray-500 text-2xl font-semibold">
            Select a chat to start messaging
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6 border-b pb-4">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="w-14 h-14 rounded-full border-2 border-green-400"
              />
              <h3 className="text-xl font-bold text-gray-700">{selectedUser.name}</h3>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-4">
              {selectedUser.messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.from === "me" ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`max-w-xs px-4 py-2 rounded-xl shadow-md ${
                    msg.from === "me"
                      ? "bg-green-500 text-white ml-auto"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
