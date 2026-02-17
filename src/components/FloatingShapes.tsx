const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Atom shape */}
      <div className="absolute top-[15%] left-[8%] animate-float opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="4" fill="hsl(199 89% 60%)" />
          <ellipse cx="30" cy="30" rx="28" ry="10" stroke="hsl(199 89% 60%)" strokeWidth="1" transform="rotate(0 30 30)" />
          <ellipse cx="30" cy="30" rx="28" ry="10" stroke="hsl(258 90% 66%)" strokeWidth="1" transform="rotate(60 30 30)" />
          <ellipse cx="30" cy="30" rx="28" ry="10" stroke="hsl(330 81% 71%)" strokeWidth="1" transform="rotate(120 30 30)" />
        </svg>
      </div>

      {/* Circuit node */}
      <div className="absolute top-[25%] right-[12%] animate-float-slow opacity-15">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect x="15" y="15" width="20" height="20" rx="4" stroke="hsl(258 90% 66%)" strokeWidth="1.5" />
          <circle cx="25" cy="25" r="5" fill="hsl(258 90% 66% / 0.4)" />
          <line x1="25" y1="0" x2="25" y2="15" stroke="hsl(258 90% 66%)" strokeWidth="1" />
          <line x1="25" y1="35" x2="25" y2="50" stroke="hsl(258 90% 66%)" strokeWidth="1" />
          <line x1="0" y1="25" x2="15" y2="25" stroke="hsl(258 90% 66%)" strokeWidth="1" />
          <line x1="35" y1="25" x2="50" y2="25" stroke="hsl(258 90% 66%)" strokeWidth="1" />
        </svg>
      </div>

      {/* Star */}
      <div className="absolute bottom-[20%] left-[15%] animate-pulse-glow">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 2l3.5 10.5H29l-8.5 6.5L24 29.5 15 23l-9 6.5 3.5-10.5L1 12.5h10.5z" fill="hsl(199 89% 60% / 0.3)" stroke="hsl(199 89% 60%)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Rocket */}
      <div className="absolute top-[60%] right-[8%] animate-float opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 4c-2 6-4 14-4 20h8c0-6-2-14-4-20z" fill="hsl(330 81% 71% / 0.3)" stroke="hsl(330 81% 71%)" strokeWidth="1" />
          <path d="M16 24l-4 6h4z" fill="hsl(199 89% 60% / 0.3)" />
          <path d="M24 24l4 6h-4z" fill="hsl(199 89% 60% / 0.3)" />
          <circle cx="20" cy="16" r="2" fill="hsl(199 89% 60%)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-[10%] right-[30%] w-32 h-32 rounded-full bg-neon-blue/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[15%] right-[25%] w-40 h-40 rounded-full bg-neon-purple/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[50%] left-[5%] w-24 h-24 rounded-full bg-neon-pink/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};

export default FloatingShapes;
