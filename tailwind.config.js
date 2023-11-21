/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "#14293A",
        khaki: "#A99F96",
        buff: "#DDA77B",
        whitesmoke: "#EFF2EF",
        grayfrench:"#BDB4BF",
        puce:"#BC8DA7",
        thulianpink:"#E36397",
        darkpurple:"#22092C",
      },
      fontFamily: {
        aquatico: ["Aquatico", "sans-serif"],
        playpen: ["Playpen", "sans"],
        anton: ["Anton", "sans"],
      },
      backgroundImage: {
        bgrnd: "url('C:/GITHUB/projects/taskify/src/assets/background.jpg')",
        sunset: "url(C:/GITHUB/projects/taskify/src/assets/redSunset.jpg)",
        bighead: "url(C:/GITHUB/projects/taskify/src/assets/bigHead.jpg)",
        virgin: "url(C:/GITHUB/projects/taskify/src/assets/virgin.jpg)",
        almost: "url(C:/GITHUB/projects/taskify/src/assets/almost.jpg)",
        midnight:"url(C:/GITHUB/projects/taskify/src/assets/midnight.jpg)",
        deep:"url(C:/GITHUB/projects/taskify/src/assets/deep.jpg)"
      },
    },
  },
  plugins: [],
};
