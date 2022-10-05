/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "4-blue": "#202667",
        "3-blue": "#4F77F6",
        "2-blue": "#98D4FA",
        "1-blue": "#E1F3FE",
        "G1-blue": "#73C7FC",
      },
      gridTemplateColumns: {
        "1fr": "repeat(2,1fr)",
        postpage: "repeat(2,825px)",
      },
      width: {
        "830px": "830px",
      },
    },
  },
  plugins: [],
};
