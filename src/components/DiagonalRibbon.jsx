


'use client';
import React from 'react';
import Link from 'next/link';

export default function DiagonalBottomRibbon60deg({
  width = 1600,
  height = 300,
  diagonalHeight = 100,
  angle = 80, // not used directly for points here, kept for API
  overlayOffset = 5, // overlay өндөр нь 5px-ээр бага
  baseGradient = ['#5ea2d6', '#3f7fb0'],
  overlayGradient = ['oklch(98.2% 0.018 155.826)', 'oklch(98.2% 0.018 155.826)'],
  idSuffix = '1',
  orientation = 'bottom-left', // шинэ сонголт
}) {
  const rad = (Math.PI / 180) * angle;
  //diagonalHeight = Math.tan(rad) * (width / 16);

  // // Суурь дүрс
  // const basePoints = `
  //   0,0
  //   ${width},0
  //   ${width},${height - diagonalHeight*0.4}
  //   0,${height}
  // `;

  // // Overlay — яг ижил өргөн, height нь overlayOffset-оор бага
  // const overlayPoints = `
  //   0,0
  //   ${width},0
  //   ${width},${height - diagonalHeight * 0.2- overlayOffset}
  //   0,${height - overlayOffset}
  // `;
let basePoints, overlayPoints;

  switch (orientation) {
    case 'bottom-left':
      basePoints = `
        0,0
        ${width},0
        ${width},${height - diagonalHeight*0.5}
        0,${height}
      `;
      overlayPoints = `
        0,0
        ${width},0
        ${width},${height - diagonalHeight*0.4 - overlayOffset}
        0,${height - overlayOffset}
      `;
      break;

    case 'bottom-right':
      basePoints = `
        0,0
        ${width},0
        ${width},${height}
        0,${height - diagonalHeight*0.5}
      `;
      overlayPoints = `
        0,0
        ${width},0
        ${width},${height - overlayOffset}
        0,${height - diagonalHeight*0.4 - overlayOffset}
      `;
      break;

    case 'top-left':
      basePoints = `
        0,${diagonalHeight}
        ${width},0
        ${width},${height}
        0,${height}
      `;
      overlayPoints = `
        0,${diagonalHeight + overlayOffset}
        ${width},0
        ${width},${height}
        0,${height - overlayOffset}
      `;
      break;

    case 'top-right':
      basePoints = `
        0,0
        ${width},${diagonalHeight*0.4}
        ${width},${height}
        0,${height}
      `;
      overlayPoints = `
        0,${overlayOffset}
        ${width},${diagonalHeight*0.5 + overlayOffset}
        ${width},${height}
        0,${height}
      `;
      break;
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ width: '100%', height: `${height}px`, display: 'block' }}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id={`grad-base-${idSuffix}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={baseGradient[0]} />
          <stop offset="1" stopColor={baseGradient[1]} />
        </linearGradient>

        <linearGradient id={`grad-overlay-${idSuffix}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={overlayGradient[0]} />
          <stop offset="1" stopColor={overlayGradient[1]} />
        </linearGradient>

        <filter id={`softShadow-${idSuffix}`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Суурь диагональ */}
      <polygon points={basePoints} fill={`url(#grad-base-${idSuffix})`} />

      {/* Давхарласан overlay (5px бага өндөртэй) */}
      <polygon
        points={overlayPoints}
        fill={`url(#grad-overlay-${idSuffix})`}
        filter={`url(#softShadow-${idSuffix})`}
      />
    </svg>
  );
}

// 'use client';
// import React from 'react';

// export default function DiagonalRibbon({
//   width = 1200,
//   height = 160,
//   angle = 70, // өнцөг
//   diagonalHeight = 100,
//   overlayOffset = 25,
//   baseGradient = ['#5ea2d6', '#3f7fb0'],
//   overlayGradient = ['oklch(98.2% 0.018 155.826)', 'oklch(98.2% 0.018 155.826)'],
//   idSuffix = '1',
//   orientation = 'bottom-left', // шинэ сонголт
// }) {
//   const rad = (Math.PI / 180) * angle;
//   diagonalHeight = Math.tan(rad) * (width / 30);

//   let basePoints, overlayPoints;

//   switch (orientation) {
//     case 'bottom-left':
//       basePoints = `
//         0,0
//         ${width},0
//         ${width},${height - diagonalHeight*0.5}
//         0,${height}
//       `;
//       overlayPoints = `
//         0,0
//         ${width},0
//         ${width},${height - diagonalHeight*0.4 - overlayOffset}
//         0,${height - overlayOffset}
//       `;
//       break;

//     case 'bottom-right':
//       basePoints = `
//         0,0
//         ${width},0
//         ${width},${height}
//         0,${height - diagonalHeight*0.5}
//       `;
//       overlayPoints = `
//         0,0
//         ${width},0
//         ${width},${height - overlayOffset}
//         0,${height - diagonalHeight*0.4 - overlayOffset}
//       `;
//       break;

//     case 'top-left':
//       basePoints = `
//         0,${diagonalHeight}
//         ${width},0
//         ${width},${height}
//         0,${height}
//       `;
//       overlayPoints = `
//         0,${diagonalHeight + overlayOffset}
//         ${width},0
//         ${width},${height}
//         0,${height - overlayOffset}
//       `;
//       break;

//     case 'top-right':
//       basePoints = `
//         0,0
//         ${width},${diagonalHeight*0.4}
//         ${width},${height}
//         0,${height}
//       `;
//       overlayPoints = `
//         0,${overlayOffset}
//         ${width},${diagonalHeight*0.5 + overlayOffset}
//         ${width},${height}
//         0,${height}
//       `;
//       break;
//   }

//   return (
//     <svg
//       viewBox={`0 0 ${width} ${height}`}
//       preserveAspectRatio="none"
//       style={{ width: '100%', height: `${height}px`, display: 'block' }}
//       aria-hidden="true"
//       role="img"
//     >
//       <defs>
//         <linearGradient id={`grad-base-${idSuffix}`} x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0" stopColor={baseGradient[0]} />
//           <stop offset="1" stopColor={baseGradient[1]} />
//         </linearGradient>

//         <linearGradient id={`grad-overlay-${idSuffix}`} x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0" stopColor={overlayGradient[0]} />
//           <stop offset="1" stopColor={overlayGradient[1]} />
//         </linearGradient>

//         <filter id={`softShadow-${idSuffix}`} x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
//         </filter>
//       </defs>

//       <polygon points={basePoints} fill={`url(#grad-base-${idSuffix})`} />
//       <polygon
//         points={overlayPoints}
//         fill={`url(#grad-overlay-${idSuffix})`}
//         filter={`url(#softShadow-${idSuffix})`}
//       />
//     </svg>
//   );
// }
