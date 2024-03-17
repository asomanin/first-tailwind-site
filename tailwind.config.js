/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      xxs:"50px",
      cs:"341px",
      xs:"450px",
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px",
      xl2:{ max: "1535px"},
    }
  },
  plugins: [],
}