// SVG ornaments matching the real invitation card aesthetic

export function GaneshaMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cardGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#8C6D32" />
        </linearGradient>
      </defs>
      {/* Crown / Mukut */}
      <path
        d="M30 4L34 12H26L30 4Z"
        stroke="url(#cardGold)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M22 12Q30 9 38 12" stroke="url(#cardGold)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Ears */}
      <path
        d="M23 16C15 16 11 22 12 30C13 36 19 38 23 35"
        stroke="url(#cardGold)"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M37 16C45 16 49 22 48 30C47 36 41 38 37 35"
        stroke="url(#cardGold)"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Head */}
      <ellipse cx="30" cy="22" rx="9" ry="8" stroke="url(#cardGold)" strokeWidth="1.2" />
      {/* Tilak */}
      <path d="M30 16V22" stroke="#A94424" strokeWidth="1.4" strokeLinecap="round" />
      {/* Trunk */}
      <path
        d="M30 26Q32 36 26 42Q20 48 19 54Q18 59 26 59Q32 59 34 52"
        stroke="url(#cardGold)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Modak / Hand */}
      <circle cx="36" cy="48" r="2.5" fill="url(#cardGold)" />
      {/* Tusk */}
      <path d="M23 27L20 28" stroke="url(#cardGold)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function EucalyptusSprays({ className, flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M8 8 C40 18 80 40 145 125"
        stroke="#4B6043"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      {[
        [16, 12, 42, 6, "#6E8761", 0.75],
        [28, 26, 56, 16, "#5A734E", 0.85],
        [44, 40, 78, 28, "#4B6043", 0.8],
        [64, 58, 100, 44, "#6E8761", 0.9],
        [88, 78, 124, 62, "#5A734E", 0.85],
        [112, 98, 148, 82, "#4B6043", 0.8],
        [32, 22, 10, 40, "#7D9670", 0.7],
        [54, 38, 30, 60, "#5A734E", 0.8],
        [78, 54, 52, 78, "#6E8761", 0.85],
        [104, 74, 76, 100, "#4B6043", 0.8],
      ].map(([x1, y1, x2, y2, color, opacity], i) => (
        <path
          key={i}
          d={`M${x1} ${y1} Q${(x1 + x2) / 2 + (i % 2 === 0 ? 10 : -10)} ${(y1 + y2) / 2 - 8} ${x2} ${y2} Q${(x1 + x2) / 2} ${(y1 + y2) / 2 + 8} ${x1} ${y1}`}
          fill={color}
          opacity={opacity}
        />
      ))}
    </svg>
  );
}

export function CardFloralDivider({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="60" y2="10" stroke="#C5A059" strokeWidth="0.9" opacity="0.65" />
      <line x1="100" y1="10" x2="160" y2="10" stroke="#C5A059" strokeWidth="0.9" opacity="0.65" />
      <g transform="translate(80, 10)">
        <circle cx="0" cy="0" r="2.2" fill="#8C6D32" />
        <path d="M-8 0C-4 -4 0 -4 0 0C0 4 -4 4 -8 0Z" fill="#C5A059" opacity="0.8" />
        <path d="M8 0C4 -4 0 -4 0 0C0 4 4 4 8 0Z" fill="#C5A059" opacity="0.8" />
        <path d="M0 -8C-4 -4 -4 0 0 0C4 0 4 -4 0 -8Z" fill="#C5A059" opacity="0.8" />
        <path d="M0 8C-4 4 -4 0 0 0C4 0 4 4 0 8Z" fill="#C5A059" opacity="0.8" />
      </g>
    </svg>
  );
}

export function SamaiDiyaIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="samaiBrass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2C275" />
          <stop offset="40%" stopColor="#C5A059" />
          <stop offset="80%" stopColor="#8C6D32" />
          <stop offset="100%" stopColor="#B38B42" />
        </linearGradient>
        <radialGradient id="samaiFlame" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#FFE082" />
          <stop offset="70%" stopColor="#FF9800" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>
      </defs>
      {/* Flame */}
      <path
        d="M50 8 C54 18 56 24 50 30 C44 24 46 18 50 8 Z"
        fill="url(#samaiFlame)"
        filter="drop-shadow(0 0 4px rgba(255,160,0,0.8))"
      />
      {/* Top Finial */}
      <path d="M48 28 H52 V36 H48 Z" fill="url(#samaiBrass)" />
      <circle cx="50" cy="34" r="3" fill="url(#samaiBrass)" />
      {/* Diya Cup */}
      <ellipse cx="50" cy="44" rx="22" ry="6" fill="url(#samaiBrass)" stroke="#7A5818" strokeWidth="0.8" />
      {/* Stem / Pillar */}
      <rect x="47" y="44" width="6" height="42" fill="url(#samaiBrass)" />
      <circle cx="50" cy="62" r="5" fill="url(#samaiBrass)" />
      <ellipse cx="50" cy="74" rx="8" ry="2.5" fill="url(#samaiBrass)" />
      {/* Base */}
      <path
        d="M32 98 C36 88 64 88 68 98 L72 108 H28 L32 98 Z"
        fill="url(#samaiBrass)"
        stroke="#7A5818"
        strokeWidth="0.8"
      />
      <ellipse cx="50" cy="108" rx="26" ry="6" fill="url(#samaiBrass)" stroke="#7A5818" strokeWidth="0.8" />
      {/* Jasmine Flowers around base */}
      {[30, 42, 54, 66].map((x, i) => (
        <circle key={i} cx={x} cy={114} r="3.5" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5" />
      ))}
      {[36, 48, 60].map((x, i) => (
        <circle key={`j2-${i}`} cx={x} cy={117} r="3" fill="#FFFDE7" stroke="#FFE082" strokeWidth="0.5" />
      ))}
    </svg>
  );
}

export function KalashIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="potCopper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D98A5B" />
          <stop offset="40%" stopColor="#B35F38" />
          <stop offset="80%" stopColor="#7E3A1A" />
          <stop offset="100%" stopColor="#A8542E" />
        </linearGradient>
        <linearGradient id="coconutG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8D6E63" />
          <stop offset="100%" stopColor="#4E342E" />
        </linearGradient>
      </defs>
      {/* Coconut */}
      <path
        d="M50 20 C58 32 62 44 50 54 C38 44 42 32 50 20 Z"
        fill="url(#coconutG)"
        stroke="#3E2723"
        strokeWidth="1.2"
      />
      {/* Mango Leaves */}
      <path d="M34 50 C20 40 12 42 6 52 C18 54 28 54 34 50 Z" fill="#4B6043" />
      <path d="M66 50 C80 40 88 42 94 52 C82 54 72 54 66 50 Z" fill="#4B6043" />
      <path d="M40 50 C32 34 24 36 18 44 C26 48 36 50 40 50 Z" fill="#5A734E" />
      <path d="M60 50 C68 34 76 36 82 44 C74 48 64 50 60 50 Z" fill="#5A734E" />
      {/* Pot Neck */}
      <rect x="36" y="52" width="28" height="6" rx="1.5" fill="url(#potCopper)" stroke="#5D260D" strokeWidth="0.8" />
      {/* Pot Body */}
      <path
        d="M34 58 C18 68 16 86 24 100 C30 110 70 110 76 100 C84 86 82 68 66 58 Z"
        fill="url(#potCopper)"
        stroke="#5D260D"
        strokeWidth="1"
      />
      {/* Swastika mark */}
      <g transform="translate(43, 76) scale(0.6)" stroke="#C62828" strokeWidth="2.2" strokeLinecap="round">
        <path d="M12 0 V24 M0 12 H24 M12 0 H24 M24 12 V24 M12 24 H0 M0 12 V0" />
      </g>
      {/* Marigold Flowers next to pot */}
      <circle cx="78" cy="112" r="7" fill="#FFA000" stroke="#E65100" strokeWidth="0.6" />
      <circle cx="88" cy="114" r="6" fill="#FFC107" stroke="#FFA000" strokeWidth="0.6" />
      <circle cx="70" cy="116" r="6" fill="#FF8F00" stroke="#DD2C00" strokeWidth="0.6" />
    </svg>
  );
}

export function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 3v4M17 3v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function PinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c-4.4 0-8 3.5-8 8 0 5.8 8 10 8 10s8-4.2 8-10c0-4.5-3.6-8-8-8z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="12" cy="11" r="2.8" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function ClockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12l16-8-6 16-2.5-6.5L4 12z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.81 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.6 15.28 4.21 13.62 4.21 11.91C4.21 7.37 7.91 3.67 12.04 3.67M9.13 7.39C8.94 7.39 8.63 7.46 8.37 7.74C8.11 8.02 7.37 8.71 7.37 10.13C7.37 11.55 8.4 12.92 8.55 13.11C8.7 13.3 10.53 16.12 13.35 17.33C14.02 17.62 14.54 17.79 14.95 17.92C15.62 18.13 16.23 18.1 16.71 18.03C17.25 17.95 18.37 17.35 18.6 16.7C18.84 16.05 18.84 15.49 18.77 15.37C18.7 15.25 18.52 15.18 18.25 15.05C17.98 14.92 16.68 14.28 16.44 14.19C16.2 14.1 16.03 14.05 15.86 14.31C15.69 14.57 15.2 15.18 15.05 15.35C14.9 15.52 14.75 15.54 14.48 15.41C14.21 15.28 13.34 14.99 12.31 14.07C11.5 13.35 10.96 12.46 10.8 12.19C10.64 11.92 10.78 11.78 10.92 11.64C11.04 11.52 11.19 11.33 11.33 11.17C11.47 11.01 11.52 10.89 11.61 10.71C11.7 10.53 11.65 10.37 11.59 10.25C11.53 10.13 11.03 8.91 10.82 8.41C10.62 7.92 10.42 7.99 10.26 7.98C10.11 7.97 9.94 7.97 9.77 7.97C9.6 7.97 9.32 7.39 9.13 7.39Z" />
    </svg>
  );
}
