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
        'mix-height': 'mix-height'
      },

      spacing: {
        "full-nav": "calc(100vh - 60px)"
      },

      backgroundImage: {
        "wave": "linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180));"
      }
    },

    colors: {
      "white": "white",
      "black": "black",
      "sky-blue": "rgb(0, 199, 229)",
      "blue": "rgb(0, 101, 255)",
      "blue-opaque": "rgb(7, 71, 166)",
      "blue-dark": "rgb(23, 43, 77)",
      "gray": "rgb(9, 30, 66, 0.5) !important"
    }
  },

  plugins: [],
};
export default config;
