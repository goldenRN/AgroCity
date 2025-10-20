// utils/colors.js
export function colorForName(name) {
  // Simple deterministic hash -> HSL color
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) % 360;
  }
  const s = 65; // saturation
  const l = 55; // lightness
  return `hsl(${h} ${s}% ${l}%)`;
}
