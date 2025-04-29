import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import generateTailwindShades from "./utils/js/colorGen.js";
import { config as colorConfig} from "./config.js";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        prmry: generateTailwindShades(colorConfig.colors.primary),
        scndry: generateTailwindShades(colorConfig.colors.secondary),
        accnt: generateTailwindShades(colorConfig.colors.accnt),
        drk: generateTailwindShades(colorConfig.colors.dark),
        brght: generateTailwindShades(colorConfig.colors.bright),
        success: generateTailwindShades(colorConfig.colors.success),
        warn: generateTailwindShades(colorConfig.colors.warn),
        err: generateTailwindShades(colorConfig.colors.err),
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
