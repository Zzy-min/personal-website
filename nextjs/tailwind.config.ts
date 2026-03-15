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
        bg: '#f5efe5',
        panel: '#fffaf2',
        text: '#1c1a16',
        muted: '#6e675d',
        line: '#d8cbbb',
        paper: {
          DEFAULT: '#f7f1e8',
          soft: '#fcf7ef',
          hover: '#efe4d3',
          inverse: '#faf4ea',
        },
        primary: {
          DEFAULT: '#2f5a45',
          strong: '#1d392b',
        },
        accent: {
          sage: '#6f876c',
          gold: '#b28a55',
        },
      },
      boxShadow: {
        card: '0 24px 60px rgba(66, 47, 25, 0.08)',
        glow: '0 18px 36px rgba(47, 90, 69, 0.16)',
      },
      borderRadius: {
        card: '28px',
        button: '999px',
        badge: '999px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
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
