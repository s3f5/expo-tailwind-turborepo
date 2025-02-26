import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--grey-400)",
        input: "var(--grey-400)",
        background: "var(--grey-100)",
        foreground: "var(--grey-950)",
        primary: {
          DEFAULT: "var(--blue-600)",
          foreground: "#ffffff",
          hover: "var(--blue-700)",
        },
        destructive: {
          DEFAULT: "var(--red-100)",
          foreground: "var(--red-800)",
        },
        warning: {
          DEFAULT: "var(--orange-100)",
          foreground: "var(--orange-800)",
        },
        success: {
          DEFAULT: "var(--green-100)",
          foreground: "var(--green-800)",
        },
        muted: {
          DEFAULT: "var(--grey-200)",
          foreground: "var(--grey-600)",
        },
        accent: {
          DEFAULT: "var(--grey-400)",
          foreground: "var(--grey-1000)",
        },
        popover: {
          DEFAULT: "var(--grey-100)",
          foreground: "var(--grey-950)",
        },
        card: {
          DEFAULT: "var(--grey-200)",
          foreground: "var(--grey-950)",
        },
      },
    },
  },
} satisfies Config;
