/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827', // Rich Black
        secondary: '#1F2937', // Dark Charcoal
        accent: '#F59E0B', // Luxury Gold
        goldLight: '#FBBF24', // Light Gold
        bg: '#FAFAF9', // Background
        textMain: '#111827', // Text
        textSecondary: '#6B7280', // Secondary Text
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 48px -8px rgba(245, 158, 11, 0.15)',
        'luxury': '0 20px 60px -20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
