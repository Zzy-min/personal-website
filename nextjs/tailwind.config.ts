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
        bg: '#f6f6f1',
        panel: '#fbfbf7',
        text: '#20231f',
        muted: '#6b7068',
        line: '#d9ddd4',
        paper: {
          DEFAULT: '#f6f6f1',
          soft: '#fafaf6',
          hover: '#ecefe8',
          inverse: '#f8faf7',
        },
        primary: {
          DEFAULT: '#315c45',
          strong: '#234633',
        },
        accent: {
          sage: '#6f876c',
          gold: '#b28a55',
        },
      },
      boxShadow: {
        card: '0 14px 40px rgba(32, 35, 31, 0.05)',
        glow: '0 18px 36px rgba(47, 90, 69, 0.16)',
      },
      borderRadius: {
        card: '14px',
        button: '10px',
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
