/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        "orange": '#EE7439',
        success: '#0070f3',
        cyan: '#79FFE1',
        gray: '#C2C2C2',
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },    
      screens: {
      'smd': { 'min': '768px', 'max': '1536px' }
    },
    backgroundImage: {
      'hero-delbixd' : "/svg/bixd/Mac.svg",
      'hero-delbwu' : "/svg/bwu/Mac.svg",
      'hero-delbmed' : "/svg/bmed/Mac.svg",
      'hero-delhjem' : "/svg/bixd/Mac.svg"
    }
    },
  },
  plugins: [],
}
