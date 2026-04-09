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
        /* ── Olive green brand palette ─────────────────── */
        navy: {
          DEFAULT: '#4F7A21',   // primary olive green
          dark:    '#2D4A12',   // deep olive (dark sections / footer)
          mid:     '#3A5A18',   // headings / medium dark
        },
        brand: {
          blue:   '#7AB340',    // lighter olive — accent labels / links
          yellow: '#E07B35',    // amber (chairs) — CTA highlights
          gold:   '#C96428',    // dark amber
        },
        body: '#687260',        // olive-tinted muted body text
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
