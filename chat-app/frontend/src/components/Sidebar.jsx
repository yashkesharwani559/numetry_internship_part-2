import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users, Search } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users
    .filter((user) => {
      const matchesSearch = user.fullName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesOnline = showOnlineOnly ? onlineUsers.includes(user._id) : true;
      return matchesSearch && matchesOnline;
    });

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300/50 flex flex-col bg-gradient-to-b from-base-100/50 to-violet-50/30 backdrop-blur-sm transition-all duration-300">
      <div className="border-b border-base-300/50 w-full p-5 bg-gradient-to-r from-base-100/80 to-violet-50/80">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-tr from-primary to-violet-500 flex items-center justify-center shadow-lg shadow-primary/20">
            <Users className="size-5 text-white" />
          </div>
          <div className="hidden lg:block">
            <h2 className="font-bold text-lg bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Contacts</h2>
            <p className="text-sm text-base-content/70">
              {onlineUsers.length - 1} online
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mt-4 space-y-3 hidden lg:block animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-base-content/50" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-sm w-full pl-10 bg-base-200/50 border-base-300/50 focus:border-primary/50 transition-all duration-300"
            />
          </div>

          <label className="cursor-pointer flex items-center gap-2 hover:text-primary transition-colors">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary"
            />
            <span className="text-sm">Show online only</span>
          </label>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-transparent">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3 group
              hover:bg-base-200/70 transition-all duration-300
              ${selectedUser?._id === user._id ? "bg-base-200/90 shadow-md" : ""}
              animate-fade-in
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <div className="size-12 rounded-full ring-2 ring-primary/20 ring-offset-2 group-hover:ring-primary/40 transition-all duration-300 overflow-hidden">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.fullName}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-base-100 animate-pulse" />
              )}
            </div>

            <div className="hidden lg:block text-left min-w-0 group-hover:translate-x-1 transition-transform duration-300">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className={`text-sm ${onlineUsers.includes(user._id) 
                ? "text-green-500" 
                : "text-base-content/50"}`}>
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-base-content/50 py-8 animate-fade-in">
            <Users className="size-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">No contacts found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
