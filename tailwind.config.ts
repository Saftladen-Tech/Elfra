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
      },
    },
  },
};
