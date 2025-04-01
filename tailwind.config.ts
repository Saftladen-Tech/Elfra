import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import generateTailwindShades from "./utils/js/colorGen.js";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        prmry: generateTailwindShades("#669c35"),
        scndry: generateTailwindShades("#aaaaaa"),
        accnt: generateTailwindShades("#fde1af"),
        drk: generateTailwindShades("#0e0e11"),
        brght: generateTailwindShades("#ffffff"),
<<<<<<< HEAD
        muted: generateTailwindShades("#a1a1a1"),
        err: generateTailwindShades("#ff6467"),
        brdr: generateTailwindShades("#262626"),
=======
        success: generateTailwindShades("#00DC82"),
        warn: generateTailwindShades("#fcc800"),
        err: generateTailwindShades("#ff6467"),
>>>>>>> main
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
