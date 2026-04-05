/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        dark: {
          900: "#03030a",
          800: "#07070f",
          700: "#0d0d1a",
          600: "#13132a",
        },
        brand: {
          blue: "#3b82f6",
          "blue-light": "#60a5fa",
          "blue-dim": "#1d4ed8",
          violet: "#8b5cf6",
          "violet-light": "#a78bfa",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #3b82f6 0deg, #8b5cf6 120deg, #3b82f6 360deg)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "border-glow": "borderGlow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        borderGlow: {
          "0%": { boxShadow: "0 0 10px rgba(59,130,246,0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(139,92,246,0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59,130,246,0.25)",
        "glow-violet": "0 0 20px rgba(139,92,246,0.25)",
        "card-dark": "0 4px 40px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
}
