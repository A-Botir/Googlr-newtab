/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
        center: true,
      },
    },
    fontFamily: {
      inter: "Inter",
    },
    boxShadow: {
      img: "0 0 12px 8px rgba(156, 204, 252, 0.2)",
      card: "0 0 24px #cee5fd",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      half: "50%",
      16: "4rem",
    },
    fontSize: {
      "xl-custom": "1.125rem",
    },
  },
  plugins: [],
};
