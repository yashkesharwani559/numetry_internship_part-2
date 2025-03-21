import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-gradient-to-r from-base-100/80 to-violet-50/80 border-b border-base-300/50 fixed w-full top-0 z-40 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="group flex items-center gap-3 hover:opacity-90 transition-all">
              <div className="size-10 rounded-xl bg-gradient-to-tr from-primary to-violet-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  chat-App
                </h1>
                <span className="text-xs text-base-content/70 font-medium">Connect & Chat</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {authUser && (
              <>
                <Link 
                  to={"/profile"} 
                  className="btn btn-sm gap-2 bg-base-200/50 hover:bg-base-200 border-none rounded-lg px-4"
                >
                  <User className="size-5 text-primary" />
                  <span className="hidden sm:inline font-medium">Profile</span>
                </Link>

                <button 
                  className="btn btn-sm gap-2 bg-base-200/50 hover:bg-red-50 hover:text-red-500 border-none rounded-lg px-4 transition-colors" 
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
