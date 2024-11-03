const chroma = require("chroma-js");

function generateTailwindColors(baseColor) {
  return {
    50: chroma(baseColor).brighten(1).hex(),
    100: chroma(baseColor).brighten(0.8).hex(),
    200: chroma(baseColor).brighten(0.6).hex(),
    300: chroma(baseColor).brighten(0.4).hex(),
    400: chroma(baseColor).brighten(0.2).hex(),
    500: chroma(baseColor).hex(), // base color
    600: chroma(baseColor).darken(0.2).hex(),
    700: chroma(baseColor).darken(0.4).hex(),
    800: chroma(baseColor).darken(0.6).hex(),
    900: chroma(baseColor).darken(0.8).hex(),
  };
}

export default generateTailwindColors;