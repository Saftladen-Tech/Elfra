import chroma from "chroma-js";

export default function generateTailwindShades(baseColor) {
  return {
    50: chroma(baseColor).brighten(2.5).desaturate(2).hex(),
    100: chroma(baseColor).brighten(2.5).hex(),
    200: chroma(baseColor).brighten(2).hex(),
    300: chroma(baseColor).brighten(1.5).hex(),
    400: chroma(baseColor).brighten(1).hex(),
    500: chroma(baseColor).hex(), // Base color
    600: chroma(baseColor).darken(0.5).hex(),
    700: chroma(baseColor).darken(1).hex(),
    800: chroma(baseColor).darken(1.5).hex(),
    900: chroma(baseColor).darken(2).hex(),
    950: chroma(baseColor).darken(2.8).hex(),
  };
}

// DEBUG
// console.log(generateTailwindShades("#3498db"));
