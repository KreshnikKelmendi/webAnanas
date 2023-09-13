/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-main": "#65AC45",
        "red-main": "#EE303C",
        "orange-main": "#F9AE4C",
        "gray-main": "#5E5D5D",
      },
      fontFamily: {
        sans: ["var(--font-rough)"],
      },
      fontSize: {
        headerDesktop: "3.38541667vw",
        headerTwoDesktop: "2.91666667vw",
        h3Desktop: "1.82291667vw",
        paragraphDesktop: "1.14583333vw",
        buttonText: "0.83333333vw",
        mobH3: "9.3023255814vw",
        mobParagraph: "4.1860465116vw",
        mobSliderH: "5.8139534884vw",
        mobSliderP: "3.7209302326vw",
        mobFooterP: "3,2558139535vw",
      },
      margin: {
        desktop: "5.57291667vw",
      },
      padding: {
        desktop: "5.57291667vw",
      },
    },
  },
  plugins: [],
};
