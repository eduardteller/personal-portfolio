import typo from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-zinc-100", "bg-[#151517]"],
  theme: {
    extend: {
      keyframes: {
        comet: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(110vw) " },
        },
      },
      animation: {
        comet: "comet 1s linear forwards",
      },
    },
  },
  plugins: [
    typo,
    // ...
  ],
} satisfies Config;
