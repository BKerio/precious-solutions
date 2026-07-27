// import React from 'react';

// interface LogoProps {
//   scrolled?: boolean;
//   light?: boolean;
// }

// function Logo({ scrolled = false, light = false }: LogoProps) {
//   // Determine colors based on page state (scrolled vs transparent header or dark footer)
//   const textColor = light ? 'text-white' : scrolled ? 'text-[#184341]' : 'text-white';
//   const subTextColor = light ? 'text-white/90' : scrolled ? 'text-[#184341]' : 'text-white/90';
//   const badgeBorderColor = light ? 'border-white text-white' : scrolled ? 'border-[#184341] text-[#184341]' : 'border-white text-white';

//   // Separator is white by default, and becomes teal on white scrolled header to remain visible
//   const separatorColor = light ? '#ffffff' : scrolled ? '#184341' : '#ffffff';

//   return (
//     <div className="flex flex-col items-center select-none group py-1">
//       {/* SVG Definitions at the top to ensure filter works everywhere */}
//       <svg className="absolute w-0 h-0" aria-hidden="true">
//         <defs>
//           <filter id="hand-drawn-filter" x="-10%" y="-10%" width="120%" height="120%">
//             <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
//             <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
//           </filter>
//         </defs>
//       </svg>

//       <div className="relative flex items-center">
//         {/* Signature/Serif Brand Text (Larry) - Hand Sketched Effect */}
//         <span 
//           className={`text-4xl md:text-5xl leading-none tracking-[0.03em] font-extrabold ${textColor} transition-colors duration-300 pr-6 select-none`}
//           style={{ 
//             fontFamily: "'Roboto Slab', 'Jost', serif",
//             filter: 'url(#hand-drawn-filter)'
//           }}
//         >
//           Larry
//         </span>
        
//         {/* Trademark Circle (L Badge) - Hand Sketched Effect */}
//         <div 
//           className={`absolute top-0 right-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-extrabold tracking-tighter ${badgeBorderColor} transition-colors duration-300`}
//           style={{ filter: 'url(#hand-drawn-filter)' }}
//         >
//           L
//         </div>
//       </div>

//       {/* Three-Stroke Calligraphic Separator */}
//       <div className="w-[115%] h-4 -mt-1 mb-0.5 relative">
//         <svg viewBox="0 0 200 20" preserveAspectRatio="none" className="w-full h-full">
//           {/* Top stroke */}
//           <path
//             d="M 6,4 C 62,2.5 125,5.5 194,5"
//             fill="none"
//             stroke={separatorColor}
//             strokeWidth="3.2"
//             strokeLinecap="round"
//             filter="url(#hand-drawn-filter)"
//             className="transition-all duration-300"
//           />
//           {/* Middle stroke */}
//           <path
//             d="M 24,10.5 C 68,9 114,11.5 156,9.5"
//             fill="none"
//             stroke={separatorColor}
//             strokeWidth="2.8"
//             strokeLinecap="round"
//             filter="url(#hand-drawn-filter)"
//             className="transition-all duration-300"
//           />
//           {/* Bottom stroke */}
//           <path
//             d="M 74,16.5 C 97,15.5 120,17 141,15.8"
//             fill="none"
//             stroke={separatorColor}
//             strokeWidth="2.4"
//             strokeLinecap="round"
//             filter="url(#hand-drawn-filter)"
//             className="transition-all duration-300"
//           />
//         </svg>
//       </div>

//       {/* Subtitle - Highly Visible "Hospitality Solutions" */}
//       <span className={`font-est text-[9px] md:text-[10px] tracking-[0.28em] font-bold uppercase mt-1.5 transition-colors duration-300 ${subTextColor}`}>
//         Hospitality Solutions
//       </span>
//     </div>
//   );
// }

// export default Logo;
interface LogoProps {
  scrolled?: boolean;
  light?: boolean;
}

function Logo({ scrolled = false, light = false }: LogoProps) {
  // Determine colors based on page state (scrolled vs transparent header or dark footer)
  const strokeColor = light ? '#ffffff' : scrolled ? '#184341' : '#ffffff';
  const textColor = light ? 'text-white' : scrolled ? 'text-[#184341]' : 'text-white';
  const subTextColor = light ? 'text-white/90' : scrolled ? 'text-[#184341]' : 'text-white/90';
  const badgeBorderColor = light ? 'border-white text-white' : scrolled ? 'border-[#184341] text-[#184341]' : 'border-white text-white';

  return (
    <div className="flex flex-col items-center select-none group py-1">
      <div className="relative flex items-center">
        {/* Signature/Serif Brand Text (Precious) */}
        <span 
          className={`text-4xl md:text-5xl leading-none tracking-[0.03em] font-extrabold ${textColor} transition-colors duration-300 pr-6 select-none`}
          style={{ fontFamily: "'Roboto Slab', 'Jost', serif" }}
        >
          Precious
        </span>
        
        {/* Trademark Circle (P Badge) */}
        <div className={`absolute top-0 right-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-extrabold tracking-tighter ${badgeBorderColor} transition-colors duration-300`}>
          P
        </div>
      </div>

      {/* Tilted / Calligraphic Underline SVG */}
      <div className="w-[115%] h-2.5 -mt-1.5 relative">
        <svg viewBox="0 0 200 12" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M 5,2 C 60,3 120,4 195,10"
            fill="none"
            stroke={strokeColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* Subtitle - Highly Visible "Solutions" */}
      <span className={`font-est text-[9px] md:text-[10px] tracking-[0.28em] font-bold uppercase mt-1.5 transition-colors duration-300 ${subTextColor}`}>
        Solutions
      </span>
    </div>
  );
}

export default Logo;
