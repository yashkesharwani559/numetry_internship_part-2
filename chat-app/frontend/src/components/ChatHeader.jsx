import { X, Phone, Video, MoreVertical } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-3 border-b border-base-300/50 bg-gradient-to-r from-base-100/80 to-violet-50/80 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative group">
            <div className="size-12 rounded-full ring-2 ring-primary/20 ring-offset-2 group-hover:ring-primary/40 transition-all duration-300 overflow-hidden">
              <img 
                src={selectedUser.profilePic || "/avatar.png"} 
                alt={selectedUser.fullName}
                className="size-full object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            {onlineUsers.includes(selectedUser._id) && (
              <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-white animate-pulse" />
            )}
          </div>

          {/* User info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              {selectedUser.fullName}
            </h3>
            <p className={`text-sm flex items-center gap-1.5 
              ${onlineUsers.includes(selectedUser._id) 
                ? "text-green-500" 
                : "text-base-content/60"}`}
            >
              <span className={`size-1.5 rounded-full ${onlineUsers.includes(selectedUser._id) 
                ? "bg-green-500" 
                : "bg-base-content/60"}`} 
              />
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-circle btn-sm bg-base-200/50 hover:bg-primary/10 border-none text-base-content/70 hover:text-primary transition-colors">
            <Phone className="size-4" />
          </button>
          <button className="btn btn-circle btn-sm bg-base-200/50 hover:bg-primary/10 border-none text-base-content/70 hover:text-primary transition-colors">
            <Video className="size-4" />
          </button>
          <div className="dropdown dropdown-end">
            <button className="btn btn-circle btn-sm bg-base-200/50 hover:bg-primary/10 border-none text-base-content/70 hover:text-primary transition-colors">
              <MoreVertical className="size-4" />
            </button>
            <ul className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-2 animate-fade-in">
              <li><a className="text-sm">View Profile</a></li>
              <li><a className="text-sm">Search in Conversation</a></li>
              <li><a className="text-sm text-error">Block User</a></li>
            </ul>
          </div>
          <button 
            onClick={() => setSelectedUser(null)}
            className="btn btn-circle btn-sm bg-base-200/50 hover:bg-red-50 hover:text-red-500 border-none transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Add to tailwind.config.js:
/*
extend: {
  keyframes: {
    'fade-in': {
      '0%': { opacity: '0', transform: 'translateY(-10px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    }
  },
  animation: {
    'fade-in': 'fade-in 0.2s ease-out'
  }
}
*/

export default ChatHeader;
