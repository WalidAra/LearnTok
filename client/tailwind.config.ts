import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
import { nextui } from "@nextui-org/react";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "576px", // Small
      md: "768px", // Medium
      lg: "992px", // Large
      xl: "1200px", // X-Large
      "2xl": "1400px", // XX-Large
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "576px", // Small
        md: "768px", // Medium
        lg: "992px", // Large
        xl: "1200px", // X-Large
        "2xl": "1400px", // XX-Large
      },
    },
    extend: {
      width: {
        "13": "53px",
        "500": "500px",
        "112": "450px",
        "128": "512px",
        "68": "265px",
      },

      gridTemplateColumns: {
        "1frauto1fr": "1fr auto 1fr",
      },
      gridTemplateRows: {
        "1frauto1fr": "1fr auto 1fr",
      },

      height: {
        "13": "53px",
        "125": "500px",
        "112": "450px",
        "128": "512px",
        clientVideo: "calc(100vh - 53px - 16px)",
        mainView: "calc(100vh - 53px)",
      },
      maxHeight: {
        "13": "53px",
        "500": "500px",
        "125": "450px",
        "128": "512px",
      },

      padding: {
        "13": "53px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        // common colors

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;

export default config;
