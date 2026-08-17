/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        },
        container: {
          center: true,
          padding: "1.25rem",
          screens: {
            "3xl": "950px",
          },
        },
        boxShadow: {
          "4xl": "rgba(0, 0, 0, 1) 0px 30px 50px 0px",
        },
      },
    },
    plugins: [],
  };