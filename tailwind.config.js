module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "#070b17", card: "#0e1426", line: "#1d2a4a", neon: "#22d3ee", violet: "#8b5cf6" },
      fontFamily: { sans: ["var(--font-inter)", "sans-serif"], display: ["var(--font-display)", "sans-serif"] },
      boxShadow: { glow: "0 0 30px rgba(34,211,238,.25)", glowv: "0 0 30px rgba(139,92,246,.3)" },
    },
  },
  plugins: [],
};
