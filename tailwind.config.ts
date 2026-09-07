import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#09090b",
        panel: "#101014",
        ink: "#f4f4f5",
        muted: "#a1a1aa",
        signal: "#3b82f6",
      },
      boxShadow: {
        aura: "0 0 0 1px rgba(59,130,246,.14), 0 24px 70px rgba(0,0,0,.42)",
      },
    },
  },
  plugins: [],
};

export default config;
