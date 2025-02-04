import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "adsbin-evergreens": "#415B41",
        "adsbin-evergreens-light": "rgba(65, 91, 65, 0.37)",
        dark: "#000000",
        "adsbin-grey": {
          100: "#ECECEC", // gray-light
          200: "#AEADAD", // border-btn
          300: "#AAAAAA", // AAA
          400: "#A6A6A6", // A6A
          500: "#A0A0A0", // A0A
          600: "#8C8C8C", // 8C8
          700: "#959393", // 959
          800: "#818181", // 818
          900: "#920909",
          1000: "#606060", // 606
          1100: "#EDEDED", // 606
          1200: "#FAFCF9" // 606
        },
        "adsbin-green": {
          100: "#E4FCDC", // approvedBg
          200: "#64A446", // approved
          300: "#345947", // green-text-btn
          400: "#17412D", // green-text
          500: "#4DBB18" // green
        },
        "adsbin-red": {
          100: "#FCDCDC", // unpaidBg
          200: "#FF6E6E", // unpaid
          300: "#6A0303", // unpaid
          400: "#FCDCDC" // unpaid
        },
        "adsbin-neutral": {
          100: "#F0F0F0", // runningBg
          200: "#C9C9C9", // running
          300: "#1D1B20", // running
          400: "#9D9C9C" // running
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      boxShadow: {
        container: "0px 0px 44px 0px rgba(0,0,0,0.1)",
        formField: "0px 4px 4px 0px rgba(0,0,0,0.04)"
      },
      spacing: {
        "26": "108px"
      },
      fontSize:{
        '13': "13px"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
