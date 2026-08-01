import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5f5ef',
        panel: '#fbfbf6',
        text: '#20241f',
        muted: '#676e66',
        line: '#d6dbd2',
        paper: {
          DEFAULT: '#f6f6f1',
          soft: '#fafaf6',
          hover: '#ecefe7',
          inverse: '#f8faf7',
        },
        primary: {
          DEFAULT: '#2f6047',
          strong: '#214a35',
        },
        accent: {
          sage: '#6f876c',
          gold: '#b28a55',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(32, 36, 31, 0.035), 0 12px 34px rgba(32, 36, 31, 0.045)',
        glow: '0 16px 32px rgba(47, 96, 71, 0.14)',
      },
      borderRadius: {
        card: '12px',
        button: '9px',
        badge: '999px',
      },
      fontFamily: {
        sans: ['"Alibaba PuHuiTi"', '"PingFang SC"', '"Microsoft YaHei UI"', '"Microsoft YaHei"', 'sans-serif'],
        serif: ['"Source Han Serif SC"', '"Noto Serif CJK SC"', '"Songti SC"', 'SimSun', 'serif'],
        mono: ['"Cascadia Code"', '"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
