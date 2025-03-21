import { MessageSquare, Users, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-base-100/50 to-violet-50/50">
      <div className="max-w-md text-center space-y-8">
        {/* Animated Icons Display */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="relative animate-float-slow">
            <div className="size-16 rounded-2xl bg-gradient-to-tr from-primary/80 to-violet-500 flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <MessageSquare className="size-8 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="size-5 text-primary animate-pulse" />
            </div>
          </div>
          <div className="relative animate-float-delayed">
            <div className="size-16 rounded-2xl bg-gradient-to-tr from-violet-500/80 to-primary flex items-center justify-center shadow-lg shadow-violet-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Users className="size-8 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="size-5 text-violet-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
            Welcome to chat-App !!!
          </h2>
          <p className="text-lg text-base-content/70 leading-relaxed">
            Select a conversation from the sidebar to start chatting with your friends and family.
          </p>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-2 gap-4 mt-8 animate-fade-in-up">
          <div className="p-4 rounded-xl bg-base-200/50 hover:bg-base-200/70 transition-colors">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
              <MessageSquare className="size-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Real-time Chat</h3>
            <p className="text-sm text-base-content/60">Instant messaging with live updates</p>
          </div>
          <div className="p-4 rounded-xl bg-base-200/50 hover:bg-base-200/70 transition-colors">
            <div className="size-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-3 mx-auto">
              <Users className="size-5 text-violet-500" />
            </div>
            <h3 className="font-semibold mb-1">Group Chats</h3>
            <p className="text-sm text-base-content/60">Connect with multiple friends at once</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your tailwind.config.js
/*
extend: {
  keyframes: {
    'float-slow': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' }
    },
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    'fade-in-up': {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    }
  },
  animation: {
    'float-slow': 'float-slow 3s ease-in-out infinite',
    'float-delayed': 'float-slow 3s ease-in-out infinite 1.5s',
    'fade-in': 'fade-in 0.5s ease-out',
    'fade-in-up': 'fade-in-up 0.5s ease-out'
  }
}
*/

export default NoChatSelected;
