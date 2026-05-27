export default function Logo({ height = 40, showTagline = false }) {
  return (
    <svg
      height={height}
      viewBox="0 0 320 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CrewHire Labs — Your AI Crew. Your Growth."
    >
      <defs>
        <radialGradient id="orbGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#00E87A" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#00663A" stopOpacity="0.7"/>
        </radialGradient>
        <radialGradient id="faceGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C8E6C9"/>
          <stop offset="100%" stopColor="#1A2E1A"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="softglow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="crewGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#E0E0E0"/>
        </linearGradient>
        <linearGradient id="hireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E87A"/>
          <stop offset="100%" stopColor="#00B85E"/>
        </linearGradient>
        <linearGradient id="arcTop" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#00E87A"/>
          <stop offset="100%" stopColor="#004D29"/>
        </linearGradient>
        <linearGradient id="arcBot" x1="20%" y1="100%" x2="80%" y2="0%">
          <stop offset="0%" stopColor="#00E87A"/>
          <stop offset="100%" stopColor="#003D22"/>
        </linearGradient>
      </defs>

      {/* ── ICON MARK ── */}
      <g transform="translate(2, 2)">

        {/* Outer C arc — top */}
        <path
          d="M 43 6 A 38 38 0 0 1 81 38"
          stroke="url(#arcTop)" strokeWidth="10" strokeLinecap="round" fill="none"
          filter="url(#softglow)"
        />
        {/* Outer C arc — bottom */}
        <path
          d="M 81 44 A 38 38 0 0 1 43 76"
          stroke="url(#arcBot)" strokeWidth="10" strokeLinecap="round" fill="none"
          filter="url(#softglow)"
        />

        {/* Inner C arc — top */}
        <path
          d="M 43 16 A 28 28 0 0 1 69 38"
          stroke="url(#arcTop)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.6"
        />
        {/* Inner C arc — bottom */}
        <path
          d="M 69 44 A 28 28 0 0 1 43 66"
          stroke="url(#arcBot)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.6"
        />

        {/* Suit/body silhouette */}
        <ellipse cx="56" cy="74" rx="18" ry="8" fill="#003D22" opacity="0.9"/>
        <path d="M 42 60 Q 56 72 70 60 L 72 82 Q 56 88 40 82 Z" fill="#003D22" opacity="0.9"/>
        {/* Tie */}
        <path d="M 53 63 L 56 74 L 59 63 L 56 60 Z" fill="#00E87A" opacity="0.8"/>

        {/* Face silhouette */}
        <ellipse cx="56" cy="46" rx="13" ry="16" fill="url(#faceGrad)" opacity="0.9"/>
        {/* Face highlight */}
        <ellipse cx="52" cy="40" rx="5" ry="7" fill="white" opacity="0.15"/>

        {/* Circuit lines — left side */}
        <g filter="url(#glow)" stroke="#00E87A" strokeWidth="1.2" fill="none">
          {/* Main horizontal */}
          <line x1="20" y1="37" x2="42" y2="37"/>
          {/* Branch 1 — top */}
          <line x1="20" y1="37" x2="20" y2="30"/>
          <line x1="20" y1="30" x2="28" y2="30"/>
          {/* Branch 2 — mid */}
          <line x1="20" y1="37" x2="14" y2="37"/>
          {/* Branch 3 — bottom */}
          <line x1="20" y1="37" x2="20" y2="44"/>
          <line x1="20" y1="44" x2="28" y2="44"/>
          {/* Branch 4 — far */}
          <line x1="14" y1="37" x2="14" y2="44"/>
        </g>

        {/* Circuit dots */}
        <g fill="#00E87A" filter="url(#glow)">
          <circle cx="28" cy="30" r="2.2"/>
          <circle cx="28" cy="44" r="2.2"/>
          <circle cx="14" cy="37" r="2.2"/>
          <circle cx="14" cy="44" r="2.2"/>
          <circle cx="20" cy="30" r="1.5" opacity="0.6"/>
        </g>

        {/* Center glow dot */}
        <circle cx="56" cy="41" r="3" fill="#00E87A" opacity="0.4" filter="url(#softglow)"/>
      </g>

      {/* ── WORDMARK ── */}
      {/* "Crew" */}
      <text
        x="96" y="46"
        fontFamily="Syne, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="url(#crewGrad)"
        letterSpacing="-0.5"
      >Crew</text>

      {/* "Hire" */}
      <text
        x="158" y="46"
        fontFamily="Syne, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="url(#hireGrad)"
        letterSpacing="-0.5"
      >Hire</text>

      {/* "LABS" with lines */}
      <line x1="96" y1="53" x2="130" y2="53" stroke="#00E87A" strokeWidth="0.8" opacity="0.5"/>
      <text
        x="133" y="63"
        fontFamily="Syne, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#00E87A"
        letterSpacing="4"
      >LABS</text>
      <line x1="172" y1="53" x2="218" y2="53" stroke="#00E87A" strokeWidth="0.8" opacity="0.5"/>

      {/* Tagline — optional */}
      {showTagline && (
        <text
          x="96" y="78"
          fontFamily="DM Sans, sans-serif"
          fontSize="10"
          fontWeight="400"
          fill="#4A5568"
          letterSpacing="0.3"
        >
          <tspan fill="#9CA3AF">Your AI Crew. </tspan>
          <tspan fill="#00E87A">Your Growth.</tspan>
        </text>
      )}
    </svg>
  )
}
