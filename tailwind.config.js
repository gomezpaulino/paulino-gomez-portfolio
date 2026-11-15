/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Grotto identity: charcoal + gold (from their physical boards).
        // "amber" is the structural scale in this template (text, rings, tabs).
        amber: {
          50: '#faf8f3',
          100: '#f0e9da',
          200: '#e2d3ac',
          300: '#cfb26a',
          400: '#c9a24b',
          500: '#b08a2e',
          600: '#8f6e24',
          700: '#5c4a1e',
          800: '#33291a',
          900: '#1d1710',
          950: '#14100c',
        },
        // "verde" is the action scale (buttons, prices): deep petrol teal.
        verde: {
          50: '#edf6f4',
          100: '#d9ecea',
          200: '#b5d9d4',
          300: '#7fb8af',
          400: '#3e968a',
          500: '#12776a',
          600: '#0c5f55',
          700: '#0a4a43',
          800: '#08332f',
          900: '#062622',
          950: '#041a17',
        },
        crema: {
          50: '#faf9f6',
          100: '#f4f1ea',
          200: '#eae3d3',
          300: '#dccfb2',
        },
      },
    },
  },
  plugins: [],
};
