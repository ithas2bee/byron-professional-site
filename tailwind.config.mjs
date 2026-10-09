/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172536',
        paper: '#F7F5F0',
        muted: '#697586',
        accent: '#A66A43',
        line: '#DCDDD8'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif']
      }
    }
  },
  plugins: []
};
