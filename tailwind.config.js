/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#F97316',
        'accent-hover': '#EA6C0A',
        'bg-light': '#FAFAFA',
        'text-dark': '#1E293B',
        'text-secondary': '#64748B',
        'border-light': '#E2E8F0',
      },
      fontFamily: {
        title: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(15,23,42,0.08)',
        'card-hover': '0 8px 40px 0 rgba(15,23,42,0.14)',
      },
      borderRadius: {
        card: '12px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.65s ease both',
        'fade-in': 'fadeIn 0.5s ease both',
      },
    },
  },
  plugins: [],
}
