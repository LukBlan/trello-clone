import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      },

      dropShadow: {
        "blue-shadow": "0px 0px 1px blue"
      }
    },

    colors: {
      "white": "white",
      "black": "black",
      "blue": "rgb(0, 101, 255)",
      "blue-opaque": "rgb(7, 71, 166)",
      "blue-dark": "rgb(23, 43, 77)"
    }
  },

  plugins: [],
};
export default config;
