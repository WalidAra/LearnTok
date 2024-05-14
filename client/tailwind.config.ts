import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react";
const { fontFamily } = require("tailwindcss/defaultTheme");

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
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      width: {
        "13": "53px",
        "500": "500px",
        "112": "450px",
        "128": "512px",
        "68": "265px",
        "175": "650px",
      },

      gridTemplateColumns: {
        "1frauto1fr": "1fr auto 1fr",
        "1frauto": "1fr auto",
        "video-page": "repeat(auto-fill, minmax(450px, 1fr));",
        "1fr2fr": "1fr 2fr",
        "auto-fill": "repeat(auto-fill, minmax(240px, 1fr))",
        auto1fr: "auto 1fr",
      },
      gridTemplateRows: {
        "1frauto1fr": "1fr auto 1fr",
        "1fr2fr": "208px 3fr",
        auto1fr: "auto 1fr",
        auto1frauto: "auto 1fr auto",
      },

      height: {
        "13": "53px",
        "125": "500px",
        "112": "450px",
        "128": "512px",

        clientVideo: "calc(100vh - 57px - 32px)",
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
      colors: {
        lightGreen: "#22b07d",
        lightOrange: "#ff7551",
        lightRed: "#ec5252",

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
  plugins: [require("tailwindcss-animate"), nextui()],
} satisfies Config;

export default config