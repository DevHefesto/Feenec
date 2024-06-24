import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "orange": "url('/assets/orange.png')",
          "main": "url('/assets/main.png')",
          "firefox": "url('/assets/firefox.png')",
          "facebook": "url('/assets/facebook.png')",
          "instagram": "url('/assets/instagram.png')",
          "twitter": "url('/assets/twitter.png')",

      },
    },
  },
  plugins: [],
};
export default config;
