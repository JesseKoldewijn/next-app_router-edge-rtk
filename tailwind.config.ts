import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandMain: "#3D2C45",
      },
    },
  },
  plugins: [],
} satisfies Config;
