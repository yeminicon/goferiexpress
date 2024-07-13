/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        primary: "#5872BA",
        secondary: "#FBB102",
        dark: "#313C59",
        darkest: "#020714",
        light: "#DFE4F2",
        // lightest: "#DFEEF2",
        lightest: "#F5F6FA",
        medium: "#83899A",
        green: "#4AA84E",
        red: "#FF5722",
        caution: "#BC8E04",
        grayish: "#9FA5B3",
        grayLight: "#9A9FAC",
        noteColor: "#353942",
        lightBlue: "#5872BA"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};