import ChatIllustration from "../assets/chat-illustration.svg"; // Add an SVG or image in assets folder


const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/10 to-violet-100 p-12">
      <div className="max-w-md text-center">
        <img
          src={ChatIllustration}
          alt="Chat illustration"
          className="w-full max-w-md mb-8 hover:scale-105 transition-transform duration-300 drop-shadow-xl"
        />
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">{title}</h2>
        <p className="text-base-content/70 text-lg leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
