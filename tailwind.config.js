/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'Helvetica', 'Arial', 'sans-serif'],
        inter:    ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        /* ── Cloud Nine Dental brand palette ───────────── */
        /* Derived from logo: deep olive bg + warm gold halo/tooth */
        navy: {
          DEFAULT: '#4A5520',   // dark olive green (logo background tone)
          dark:    '#2E3614',   // deep olive (footer / dark sections)
          mid:     '#3A4418',   // headings / medium dark olive
        },
        brand: {
          blue:   '#6B7F2A',    // medium olive — accent labels / links
          yellow: '#C8A020',    // warm gold (logo halo & tooth colour)
          gold:   '#A07818',    // deep gold
        },
        body: '#5A6040',        // olive-tinted muted body text
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        float:     'float 4s ease-in-out infinite',
        blob:      'blob 9s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
    },
  },
  plugins: [],
}
