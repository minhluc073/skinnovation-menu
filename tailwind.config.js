/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111",
        white: "#fff",
        primary: "#714E57",
        light: "#F8E2DF",
      },
    },
    // container: {
    //   padding: "24px",
    // },

    fontSize: {
      xl: ["20px", "24px"],
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      mb: "992px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
