import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
import { ExternalLink } from "lucide-react";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    
    subscribeToMessages(selectedUser._id);

    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto bg-gradient-to-br from-base-100/50 to-violet-50/50">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-gradient-to-br from-base-100/50 to-violet-50/50">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message, idx) => (
          <div
            key={message._id}
            className={`chat animate-fade-in ${
              message.senderId === authUser._id ? "chat-end" : "chat-start"
            }`}
            ref={idx === messages.length - 1 ? messageEndRef : null}
          >
            <div className="chat-image avatar animate-scale-in">
              <div className="size-10 rounded-full ring-2 ring-primary/20 ring-offset-2 hover:ring-primary/40 transition-all duration-300">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            
            <div className="chat-header mb-1 opacity-70 text-sm">
              {message.senderId === authUser._id ? "You" : selectedUser.fullName}
              <time className="text-xs opacity-50 ml-2">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>

            <div className={`chat-bubble ${
              message.senderId === authUser._id 
                ? "bg-gradient-to-br from-primary to-violet-500 text-white shadow-lg shadow-primary/20" 
                : "bg-gradient-to-br from-base-200 to-base-100 shadow-md"
              } hover:shadow-xl transition-all duration-300`}>
              <div className="flex flex-col gap-2">
                {message.image && (
                  <div className="relative group">
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[300px] rounded-lg hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 flex items-center justify-center">
                      <a href={message.image} target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform">
                        <ExternalLink className="size-6" />
                      </a>
                    </div>
                  </div>
                )}
                {message.text && (
                  <p className="text-[15px] leading-relaxed animate-fade-in">
                    {message.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
