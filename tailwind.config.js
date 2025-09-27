/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'script': ['Great Vibes', 'cursive'],
        'elegant': ['Playfair Display', 'serif'],
      },
      colors: {
        'rose-gold': '#F7CAC9',
        'soft-pink': '#FFE4E6',
        'warm-pink': '#FECDD3',
        'lavender': '#E9D5FF',
        'mint': '#DCFCE7',
      },
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 50%, #F7CAC9 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FFE4B5 0%, #FFCCCB 50%, #DDA0DD 100%)',
        'gradient-dreamy': 'linear-gradient(135deg, #E9D5FF 0%, #DCFCE7 50%, #FEF3C7 100%)',
      }
    },
  },
  plugins: [],
}