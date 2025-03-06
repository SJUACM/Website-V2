import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "inherit",
            a: {
              color: "inherit",
              "&:hover": {
                color: "inherit",
              },
            },
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "responsive-xs": "clamp(0.75rem, 2vw, 0.875rem)",
        "responsive-sm": "clamp(0.875rem, 2.5vw, 1rem)",
        "responsive-base": "clamp(1rem, 3vw, 1.125rem)",
        "responsive-lg": "clamp(1.125rem, 3.5vw, 1.25rem)",
        "responsive-xl": "clamp(1.25rem, 4vw, 1.5rem)",
        "responsive-2xl": "clamp(1.5rem, 5vw, 2rem)",
        "responsive-3xl": "clamp(2rem, 6vw, 3rem)",
        "responsive-4xl": "clamp(2.5rem, 7vw, 4rem)",
      },
      spacing: {
        "responsive-sm": "clamp(1rem, 3vw, 1.5rem)",
        "responsive-md": "clamp(1.5rem, 5vw, 2rem)",
        "responsive-lg": "clamp(2rem, 7vw, 3rem)",
        "responsive-xl": "clamp(3rem, 10vw, 4rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
