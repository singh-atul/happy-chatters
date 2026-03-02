/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft pastel palette - warm, friendly, kid-approved (calm for sensory sensitivity)
        'pastel-blue': '#B8D4E8',
        'pastel-blue-dark': '#7EB8D4',
        'pastel-yellow': '#F5E6B3',
        'pastel-yellow-dark': '#E8D68A',
        'pastel-green': '#B8E8C8',
        'pastel-green-dark': '#7ED4A0',
        'pastel-pink': '#F5C6D6',
        'pastel-orange': '#FFD4A3',
        'cream': '#FFFBF5',
        'warm-gray': '#6B6B6B',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'playful': '0 6px 0 rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.06)',
        'bubble': '0 4px 0 rgba(0, 0, 0, 0.05), inset 0 -2px 0 rgba(255,255,255,0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
