/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#17151A",
          dark: "#110F13",
          card: "#1E1B22",
          border: "#2D2933",
        },
        warmWhite: {
          DEFAULT: "#F7F5F2",
          light: "#FCFAF8",
        },
        softLavender: {
          DEFAULT: "#EAE5F2",
          light: "#F3F0F8",
          dark: "#D6CCE3",
        },
        mutedPlum: {
          DEFAULT: "#8B6F8F",
          hover: "#7B5F7F",
          light: "#A48AA8",
          dark: "#624B66",
        },
        dustyRose: {
          DEFAULT: "#C9A7B5",
          light: "#DDBCC9",
          dark: "#B08A9B",
        },
        warmGray: {
          DEFAULT: "#6F6A70",
          light: "#969097",
          dark: "#4B474C",
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighterExtra: '-0.05em',
        tightExtra: '-0.03em',
        widestExtra: '0.25em',
      },
      boxShadow: {
        'glow-plum': '0 0 40px rgba(139, 111, 143, 0.35)',
        'glow-plum-lg': '0 0 60px rgba(139, 111, 143, 0.5)',
        'glow-lavender': '0 0 35px rgba(234, 229, 242, 0.25)',
        'card-soft': '0 20px 40px -15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 111, 143, 0.05)',
        'luxury': '0 30px 60px -12px rgba(23, 21, 26, 0.35), 0 18px 36px -18px rgba(139, 111, 143, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

