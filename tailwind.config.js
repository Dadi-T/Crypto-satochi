module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#FF0000",
      textButton: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/Creative-Block.png')",
      },
      fontFamily: {
        Baskervville:
          "Baskervville,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        inter:
          "Inter,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
    },
  },
  plugins: [],
};
