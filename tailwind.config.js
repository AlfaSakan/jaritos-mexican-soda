module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    fontFamily: {
      adventPro: ['"Advent Pro"', "sans-serif"],
    },
    extend: {
      colors: {
        "fun-green": "#006B33",
        "french-rasberry": "#c92a47",
        "infrared-tang": "#d62041",
        "brite-gold": "#fede8d",
        "algerian-coral": "#fe5d51",
        "plastic-lips": "#a62662",
        "emerald-green": "#046907",
        "grass-daisy": "#c9af2d",
        "chaotic-red": "#720402",
        "lime-new": "#aefc41",
        "carra-marble": "#e8e6d6",
      },
      backgroundImage: {
        watermelonPattern:
          "linear-gradient(194.96deg, #47A492 -17.18%, #005943 114.92%)",
        jamaicaPattern:
          "linear-gradient(194.96deg, #D62041 -17.18%, rgba(129, 0, 23, 0.70) 114.92%)",
        mexicanPattern:
          "linear-gradient(193.49deg, #E661A2 -5.64%, rgba(157, 9, 77, 0.75) 107.95%)",
        tropicalPattern:
          "linear-gradient(194.96deg, #DBC607 -17.18%, #968210 114.92%)",
        headerJamaicaPattern:
          "linear-gradient(270.12deg, #D33B57 -6.62%, rgba(211, 59, 87, 0) 103.53%)",
        headerMexicanPattern:
          "linear-gradient(270.12deg, #CE4486 -6.62%, rgba(211, 59, 87, 0) 103.53%)",
        headerTropicalPattern:
          "linear-gradient(270.12deg, #CDB808 -6.62%, #D0BB08 103.53%)",
        headerWaterMelonPattern:
          "linear-gradient(270.12deg, #2C8874 -6.62%, #3E9B88 103.53%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
