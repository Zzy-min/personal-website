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
        bg: '#07111f',
        panel: 'rgba(11, 28, 51, 0.84)',
        text: '#eaf2ff',
        muted: '#93a8c8',
        line: 'rgba(148, 181, 255, 0.16)',
        primary: {
          DEFAULT: '#78f0ff',
          strong: '#78f0ff',
        },
        accent: {
          blue: '#52a7ff',
          purple: '#78f0ff',
        },
      },
      boxShadow: {
        card: '0 24px 60px rgba(0, 0, 0, 0.24)',
        glow: '0 0 30px rgba(82, 167, 255, 0.3)',
      },
      borderRadius: {
        card: '24px',
        button: '14px',
        badge: '999px',
      },
      fontFamily: {
        sans: ['"Segoe UI"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
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
