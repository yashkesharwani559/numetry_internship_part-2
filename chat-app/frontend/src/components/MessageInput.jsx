import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="p-4 bg-gradient-to-r from-base-100/80 to-violet-50/80 border-t border-base-300/50 backdrop-blur-md">
      {imagePreview && (
        <div className="mb-3 animate-fade-in">
          <div className="relative inline-block group">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 size-6 rounded-full bg-red-500/90 hover:bg-red-600 
                text-white flex items-center justify-center opacity-0 group-hover:opacity-100 
                transform scale-90 group-hover:scale-100 transition-all duration-300"
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
        <div className="relative flex-1 flex items-center gap-2">
          <input
            type="text"
            className="w-full input input-bordered bg-base-200/50 pr-12 pl-4 
              focus:border-primary/50 focus:ring-1 focus:ring-primary/50 
              transition-all duration-300 rounded-xl"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`absolute right-3 btn btn-circle btn-sm bg-base-200/50 hover:bg-primary/10 border-none
              ${imagePreview ? "text-primary" : "text-base-content/70"} transition-all duration-300`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image className="size-4 transform group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <button
          type="submit"
          className="btn btn-circle btn-sm bg-gradient-to-r from-primary to-violet-500 
            hover:from-primary/90 hover:to-violet-600 text-white border-none
            shadow-lg shadow-primary/20 hover:shadow-xl disabled:opacity-50 
            disabled:cursor-not-allowed transition-all duration-300"
          disabled={!text.trim() && !imagePreview}
        >
          <Send className="size-4 transform -rotate-45 group-hover:scale-110 transition-transform" />
        </button>
      </form>
    </div>
  );
};

// Add to tailwind.config.js:
/*
extend: {
  keyframes: {
    'fade-in': {
      '0%': { opacity: '0', transform: 'translateY(10px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    }
  },
  animation: {
    'fade-in': 'fade-in 0.3s ease-out'
  }
}
*/

export default MessageInput;
