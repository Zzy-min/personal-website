import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fafaf9",
        surface: "#ffffff",
        "surface-muted": "#f5f5f4",
        panel: "#ffffff",
        "panel-soft": "#fdfdfc",
        text: "#09090b",
        muted: "#52525b",
        "muted-light": "#71717a",
        line: "#e4e4e7",
        "line-dark": "#d4d4d8",
        paper: {
          DEFAULT: "#f4f4f5",
          soft: "#fafafa",
          hover: "#e4e4e7",
          inverse: "#09090b",
        },
        primary: {
          DEFAULT: "#18181b",
          strong: "#09090b",
          subtle: "#f4f4f5",
          accent: "#2563eb",
          emerald: "#059669",
        },
        accent: {
          blue: "#2563eb",
          emerald: "#059669",
          amber: "#d97706",
        },
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 6px 16px -2px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 30px -4px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(9, 9, 11, 0.12)",
        glow: "0 10px 25px -3px rgba(9, 9, 11, 0.2)",
        "glow-emerald": "0 0 16px -2px rgba(16, 185, 129, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        card: "16px",
        button: "10px",
        badge: "999px",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"],
        serif: ["Source Han Serif SC", "Noto Serif CJK SC", "Songti SC", "SimSun", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Cascadia Code", "JetBrains Mono", "Menlo", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-fast": "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
