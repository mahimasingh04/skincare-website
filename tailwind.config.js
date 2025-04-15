// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          fancy : ["Mona Sans"]
// Example fancy font
        },
        
      colors: {
        'skincare-bg': '#F2E2E1', // Add your custom color
      },
      },
    },
    plugins: [],
  }