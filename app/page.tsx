import Link from "next/link";
import CurrentYear from "./components/CurrentYear";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00c6ff] opacity-90" />
      {/* Glassmorphism Card */}
      <div className="max-w-lg w-full flex flex-col items-center gap-8 p-10 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-2xl border border-white/20 relative">
        {/* Avatar/Initials */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#00c6ff] to-[#232526] flex items-center justify-center shadow-lg mb-2 animate-fade-in">
          <span className="text-4xl font-extrabold text-white tracking-tight select-none">OT</span>
        </div>
        {/* Animated Main Text */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center drop-shadow-lg animate-slide-down">
          Oussama Taghlaoui
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#00c6ff] drop-shadow-md animate-slide-up">
          Full Stack Web Developer
        </h2>
        <p className="text-center text-lg sm:text-xl text-white/80 font-light animate-fade-in">
          🚀 My portfolio is <span className="font-bold text-[#00c6ff]">coming soon</span>! <br />
          Building something extraordinary to inspire and connect.
        </p>
        {/* Animated GitHub Button */}
        <div className="flex gap-4 mt-4 animate-fade-in">
          <Link
            href="https://github.com/Ouss-tagh-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#00c6ff] hover:bg-[#0072ff] text-white font-semibold shadow-lg transition-all duration-200 text-lg scale-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00c6ff]/50"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="inline-block">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
            </svg>
            GitHub
          </Link>
        </div>
        <div className="mt-8 text-xs text-white/60 text-center animate-fade-in">
          &copy; <CurrentYear /> Oussama Taghlaoui. All rights reserved.
        </div>
      </div>
      {/* Keyframes for animation */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-slide-down {
          animation: slideDown 1s cubic-bezier(.77,0,.18,1) both;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-slide-up {
          animation: slideUp 1s cubic-bezier(.77,0,.18,1) 0.2s both;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
