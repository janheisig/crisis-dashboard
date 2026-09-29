/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        room: {
          950: '#07090d',
          900: '#0c1016',
          850: '#11161e',
          800: '#161c26',
          700: '#222a36',
          600: '#323c4b',
          500: '#4b5667',
          400: '#7a8597',
          300: '#a3adbd',
          200: '#cdd3dc',
          100: '#e8ebf0',
        },
        status: {
          elnino: '#f59e0b',
          hormuz: '#ef4444',
          dual: '#be123c',
          minimal: '#475569',
          nodata: '#1a212c',
        },
        signal: {
          cyan: '#22d3ee',
          green: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        flow: {
          to: { strokeDashoffset: '-24' },
        },
        pulseRing: {
          '0%': { r: '4', opacity: '0.9' },
          '100%': { r: '14', opacity: '0' },
        },
      },
      animation: {
        flow: 'flow 1.4s linear infinite',
        'flow-slow': 'flow 3s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
