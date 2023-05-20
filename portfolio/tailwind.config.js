/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        majorMono: ["Major Mono", 'monospace']
      }
    },
  },
  plugins: [],
}