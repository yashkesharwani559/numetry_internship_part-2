import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-blue-100 animate-background">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-6xl h-[calc(100vh-8rem)] border border-purple-300">
          <div className="flex h-full rounded-3xl overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
