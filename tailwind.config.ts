import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sfpro: ["SF Pro Display", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1a1a1a",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#4ade80",
          foreground: "#1a1a1a",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
      },
      keyframes: {
        "card-hover": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "card-hover": "card-hover 0.3s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;