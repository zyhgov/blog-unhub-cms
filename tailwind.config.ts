import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // OpenAI Sans 字体配置
      fontFamily: {
        sans: ['OpenAI Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        openai: ['OpenAI Sans', 'sans-serif'],
      },
      // 字重配置（粗体优先）
      fontWeight: {
        light: '300',
        normal: '500',      // 正文默认使用 Medium
        medium: '600',      // Medium 使用 Semibold
        semibold: '600',
        bold: '700',
        'extra-bold': '700',
      },
      // 原有的背景图配置
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // 原有的颜色配置
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      // 原有的间距配置
      spacing: {
        28: "7rem",
      },
      // 原有的字间距配置
      letterSpacing: {
        tighter: "-.04em",
      },
      // 原有的字体大小配置
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      // 原有的阴影配置
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;