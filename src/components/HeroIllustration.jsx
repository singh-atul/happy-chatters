/**
 * HeroIllustration - Friendly, kid-appealing illustration
 * Smiling sun, clouds, and happy character - warm and welcoming
 */
export default function HeroIllustration() {
  return (
    <div className="w-full max-w-md aspect-square relative" aria-hidden="true">
      {/* Main illustration container */}
      <div className="w-full h-full bg-gradient-to-br from-pastel-blue/40 via-pastel-yellow/30 to-pastel-green/40 rounded-[2.5rem] flex items-center justify-center shadow-soft-lg border-4 border-white/60 p-8">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Friendly sun with smile */}
          <g className="animate-bounce-soft" style={{ animationDuration: '3s' }}>
            <circle cx="160" cy="45" r="35" fill="#F5E6B3" stroke="#E8D68A" strokeWidth="3" />
            <path d="M145 45 Q160 55 175 45" stroke="#E8D68A" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="152" cy="40" r="2" fill="#E8D68A" />
            <circle cx="168" cy="40" r="2" fill="#E8D68A" />
            {/* Sun rays */}
            <line x1="160" y1="10" x2="160" y2="25" stroke="#E8D68A" strokeWidth="2" strokeLinecap="round" />
            <line x1="185" y1="45" x2="200" y2="45" stroke="#E8D68A" strokeWidth="2" strokeLinecap="round" />
            <line x1="175" y1="75" x2="185" y2="90" stroke="#E8D68A" strokeWidth="2" strokeLinecap="round" />
            <line x1="145" y1="75" x2="135" y2="90" stroke="#E8D68A" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Soft cloud */}
          <g className="animate-float" style={{ animationDuration: '5s' }}>
            <ellipse cx="45" cy="55" rx="25" ry="15" fill="white" opacity="0.9" />
            <ellipse cx="65" cy="50" rx="20" ry="12" fill="white" opacity="0.9" />
            <ellipse cx="55" cy="58" rx="18" ry="10" fill="white" opacity="0.95" />
          </g>

          {/* Happy face - main character */}
          <g transform="translate(100, 100)">
            <circle r="45" fill="#B8D4E8" stroke="#7EB8D4" strokeWidth="3" />
            <circle r="38" fill="#B8E8C8" opacity="0.3" />
            {/* Big friendly eyes */}
            <ellipse cx="-12" cy="-5" rx="10" ry="12" fill="#2D3748" />
            <ellipse cx="12" cy="-5" rx="10" ry="12" fill="#2D3748" />
            <circle cx="-10" cy="-7" r="3" fill="white" />
            <circle cx="14" cy="-7" r="3" fill="white" />
            {/* Warm smile */}
            <path d="M-20 15 Q0 35 20 15" stroke="#7EB8D4" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Blush */}
            <ellipse cx="-22" cy="5" rx="6" ry="3" fill="#F5C6D6" opacity="0.6" />
            <ellipse cx="22" cy="5" rx="6" ry="3" fill="#F5C6D6" opacity="0.6" />
          </g>

          {/* Small stars/sparkles */}
          <g fill="#E8D68A" opacity="0.8">
            <path d="M30 120 l2 6 l6 2 l-6 2 l-2 6 l-2-6 l-6-2 l6-2 z" />
            <path d="M170 130 l1.5 4.5 l4.5 1.5 l-4.5 1.5 l-1.5 4.5 l-1.5-4.5 l-4.5-1.5 l4.5-1.5 z" />
          </g>
        </svg>
      </div>
    </div>
  );
}
