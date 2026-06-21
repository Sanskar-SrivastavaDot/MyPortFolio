/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "'Liberation Mono'", "'Courier New'", "monospace"],
        body: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "'Liberation Mono'", "'Courier New'", "monospace"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "'Liberation Mono'", "'Courier New'", "monospace"],
      },
      colors: {
        white: "#ffffff",   // Pure white for text, borders, shadows
        black: "#2e302b",   // Dark background color for inverted hover text
        slate: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
        },
        dark: {
          900: "#2e302b",   // FSO Dark Olive/Grey Background
          800: "#262823",
          700: "#1d1f1b",
          600: "#141512",
        },
        brand: {
          blue: "#fceba0",  // Pale Yellow Accent (from the FSO banner)
          "blue-light": "#fdf1bc",
          "blue-dim": "#d9c882",
          violet: "#ffffff",
          "violet-light": "#f8f9fa",
        },
      },
    },
  },
  plugins: [],
}
