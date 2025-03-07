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
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        // Fluid typography scale
        "fluid-xs": "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 1.3rem + 1vw, 2rem)",
        "fluid-3xl": "clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)",
        "fluid-4xl": "clamp(2.25rem, 1.95rem + 1.5vw, 3rem)",
        "fluid-5xl": "clamp(3rem, 2.5rem + 2.5vw, 4rem)",
        "fluid-6xl": "clamp(3.75rem, 3.25rem + 2.5vw, 5rem)",
      },
      spacing: {
        "responsive-sm": "clamp(1rem, 3vw, 1.5rem)",
        "responsive-md": "clamp(1.5rem, 5vw, 2rem)",
        "responsive-lg": "clamp(2rem, 7vw, 3rem)",
        "responsive-xl": "clamp(3rem, 10vw, 4rem)",
        // Fluid spacing scale
        "fluid-1": "clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)",
        "fluid-2": "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)",
        "fluid-3": "clamp(0.75rem, 0.65rem + 0.5vw, 1rem)",
        "fluid-4": "clamp(1rem, 0.85rem + 0.75vw, 1.5rem)",
        "fluid-5": "clamp(1.5rem, 1.3rem + 1vw, 2rem)",
        "fluid-6": "clamp(2rem, 1.75rem + 1.25vw, 2.5rem)",
        "fluid-8": "clamp(2.5rem, 2.15rem + 1.75vw, 3.5rem)",
        "fluid-10": "clamp(3rem, 2.5rem + 2.5vw, 4.5rem)",
        "fluid-12": "clamp(3.5rem, 3rem + 2.5vw, 5rem)",
      },
      maxWidth: {
        xxs: "16rem",
        "screen-3xl": "1920px",
      },
      minHeight: {
        "screen-75": "75vh",
        "screen-50": "50vh",
      },
      zIndex: {
        "-1": "-1",
        "60": "60",
        "70": "70",
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
