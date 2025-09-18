import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import generateTailwindShades from "./utils/js/colorGen.js";
import { config } from "./customconfig/config.js";

export default <Partial<Config>>{
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      sans: [config.font, ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        prmry: generateTailwindShades(config.colors.primary),
        scndry: generateTailwindShades(config.colors.secondary),
        accnt: generateTailwindShades(config.colors.accent),
        drk: generateTailwindShades(config.colors.dark),
        brght: generateTailwindShades(config.colors.bright),
        success: generateTailwindShades(config.colors.success),
        warn: generateTailwindShades(config.colors.warn),
        err: generateTailwindShades(config.colors.error),
      },
      dropShadow: {
        "glow-bright-lg": "0 0 50px theme('colors.prmry.300')",
        "glow-dark-lg": "0 0 50px theme('colors.prmry.500')",
      },
      boxShadow: {
        "glow-dark": "0 0 120px theme('colors.prmry.500')",
        "glow-bright": "0 0 120px theme('colors.prmry.300')",
      },
    },
  },
};
