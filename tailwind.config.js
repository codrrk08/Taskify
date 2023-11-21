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
        
  
        virgin: "url(C:/GITHUB/projects/taskify/src/assets/virgin.jpg)",
        almost:"url(C:/GITHUB/projects/taskify/src/assets/almost.jpg)",
        midnight:"url(C:/GITHUB/projects/taskify/src/assets/midnight.jpg)",
       
      },
    },
  },
  plugins: [],
};
