import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background-color) / <alpha-value>)",
        context: "hsl(var(--context-color) / <alpha-value>)",
        primary: "hsl(var(--primary-color) / <alpha-value>)",
        secondary: "hsl(var(--secondary-color) / <alpha-value>)",
        success: "hsl(var(--success-color) / <alpha-value>)",
        info: "hsl(var(--info-color) / <alpha-value>)",
        warn: "hsl(var(--warn-color) / <alpha-value>)",
        error: "hsl(var(--error-color) / <alpha-value>)",
        disabled: "hsl(var(--disabled-color) / <alpha-value>)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
  },
  plugins: [],
} satisfies Config;
